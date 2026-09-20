import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import Seo from '@/components/Seo';
import { useToast } from '@/hooks/use-toast';

type CompanySize = 'small' | 'big';

const RATE_SMALL = 20000;
const RATE_BIG = 30000;

const formatNaira = (amount: number) => `₦${amount.toLocaleString('en-NG')}`;

/** Generates a client-side reference for display purposes only. A real order record and
 *  the authoritative reference number should be created server-side once a backend exists
 *  (see project notes on the order tracker) — this is a front-end placeholder. */
const generateReference = () => {
  const n = Math.floor(10000 + Math.random() * 89999);
  return `TB-AR-${n}`;
};

/**
 * Paystack Inline JS integration point.
 *
 * ⚠️ NOT LIVE YET. To wire this up for real:
 * 1. Add the Paystack Inline script to index.html:
 *    <script src="https://js.paystack.co/v2/inline.js"></script>
 * 2. Replace PAYSTACK_PUBLIC_KEY below with your live/test public key (this is safe to
 *    expose client-side — it is NOT the secret key).
 * 3. You still need a backend step to verify the transaction server-side (a Supabase edge
 *    function or Netlify function calling Paystack's /transaction/verify endpoint) before
 *    treating an order as paid — client-side "success" alone is not sufficient for a real
 *    business. This file only handles the front-end initiation and confirmation screen.
 */
const PAYSTACK_PUBLIC_KEY = 'pk_test_REPLACE_ME';

const OrderAnnualReturns = () => {
  const { toast } = useToast();
  const [size, setSize] = useState<CompanySize>('small');
  const [years, setYears] = useState(3);
  const [companyName, setCompanyName] = useState('');
  const [rcNumber, setRcNumber] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [reference, setReference] = useState('');

  const rate = size === 'small' ? RATE_SMALL : RATE_BIG;
  const total = useMemo(() => years * rate, [years, rate]);
  const canSubmit = companyName.trim() && rcNumber.trim() && email.trim();

  const handlePayAndConfirm = () => {
    if (!canSubmit) {
      toast({ title: 'A few details are missing', description: 'Company name, RC number and email are required.' });
      return;
    }

    // Placeholder flow: this is where PaystackPop.setup({...}).openIframe() goes once the
    // public key above is live. For now this simulates confirmation so the UI/UX can be
    // reviewed end to end before payment is actually wired up.
    const ref = generateReference();
    setReference(ref);
    setConfirmed(true);
  };

  if (confirmed) {
    return (
      <>
        <Seo
          title="Order Confirmed | TidyBiz"
          description="Your annual returns order has been confirmed."
          path="/compliance/annual-returns/order"
        />
        <section className="py-24 bg-slate-50 min-h-[70vh] flex items-center">
          <div className="max-w-md mx-auto px-4 sm:px-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-primary" size={32} />
            </div>
            <h1 className="text-2xl font-extrabold text-slate-900 mb-2">Order confirmed</h1>
            <p className="text-slate-500 mb-8">Your reference number:</p>
            <p className="text-3xl font-extrabold text-primary tracking-wide mb-8">{reference}</p>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 text-left text-sm text-slate-600 space-y-2 mb-8">
              <p>We've emailed this to <span className="font-semibold text-slate-900">{email}</span>.</p>
              <p>No account needed — keep this reference if you need to reach us about this order.</p>
              <p>We'll message you at each stage: filed, then ready.</p>
            </div>
            <Link to="/" className="text-primary font-bold hover:underline">
              Back to home
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Seo
        title="Confirm Your Annual Returns Order | TidyBiz"
        description="Confirm your CAC annual returns order — no account required."
        path="/compliance/annual-returns/order"
      />
      <section className="py-16 lg:py-24 bg-slate-50 min-h-[70vh]">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Confirm your order</h1>
          <p className="text-slate-500 mb-8">Annual returns filing — no account required, just a reference number.</p>

          <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Company size</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSize('small')}
                  className={`px-4 py-3 rounded-xl border text-left transition-colors ${
                    size === 'small' ? 'bg-primary text-primary-foreground border-primary' : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  <span className="block font-bold text-sm">Small company</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSize('big')}
                  className={`px-4 py-3 rounded-xl border text-left transition-colors ${
                    size === 'big' ? 'bg-primary text-primary-foreground border-primary' : 'bg-slate-50 border-slate-200 text-slate-600'
                  }`}
                >
                  <span className="block font-bold text-sm">Big company</span>
                </button>
              </div>
            </div>

            <div>
              <label className="flex justify-between text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">
                <span>Years owed</span>
                <span className="text-primary text-sm normal-case font-extrabold">{years}</span>
              </label>
              <input
                type="range"
                min={1}
                max={10}
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-primary"
              />
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Company name</label>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Example Ventures Limited"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">RC number</label>
                <input
                  value={rcNumber}
                  onChange={(e) => setRcNumber(e.target.value)}
                  placeholder="RC 1234567"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Email for updates</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">Phone (for WhatsApp updates)</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+234 8•• ••• ••••"
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-slate-50 border border-slate-100 p-5">
              <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">Total due</p>
              <p className="text-3xl font-extrabold text-primary mb-1">{formatNaira(total)}</p>
              <p className="text-sm text-slate-500">
                {years} year{years > 1 ? 's' : ''} × {formatNaira(rate)}/year — paid on confirmation
              </p>
            </div>

            <button
              type="button"
              onClick={handlePayAndConfirm}
              className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-primary transition-colors flex items-center justify-center gap-2"
            >
              <ShieldCheck size={18} />
              Pay {formatNaira(total)} & confirm order
            </button>
            <p className="text-xs text-slate-400 text-center leading-relaxed">
              No account needed. You'll get a reference number and email confirmation immediately after payment —
              that's all you need to follow up with us.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderAnnualReturns;
