import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type CompanySize = "small" | "big";

const RATE_SMALL = 20000;
const RATE_BIG = 30000;
const MAX_FLAT_RATE_YEARS = 10;

const formatNaira = (amount: number) => `₦${amount.toLocaleString("en-NG")}`;

/**
 * Live annual returns estimator.
 * Pricing rule (confirmed): flat rate per year for 1–10 years owed, manual quote for 11+.
 * Reflects TidyBiz's service fee only — does not include CAC's own statutory penalties
 * (open decision: whether/how to fold those in — see project strategy doc).
 */
const AnnualReturnsEstimator = ({ compact = false }: { compact?: boolean }) => {
  const [size, setSize] = useState<CompanySize>("small");
  const [years, setYears] = useState(3);

  const rate = size === "small" ? RATE_SMALL : RATE_BIG;
  const needsManualQuote = years > MAX_FLAT_RATE_YEARS;
  const total = useMemo(() => years * rate, [years, rate]);

  return (
    <div className={`bg-white border border-slate-200 rounded-3xl shadow-xl shadow-slate-200/50 ${compact ? "p-6" : "p-8 lg:p-10"}`}>
      <h3 className={`font-extrabold text-slate-900 ${compact ? "text-xl" : "text-2xl"} mb-1`}>Annual returns estimate</h3>
      <p className="text-slate-500 text-sm mb-7">Tell us your company size and how many years you owe.</p>

      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-wide text-slate-500 mb-3">Company size</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setSize("small")}
            className={`text-left px-4 py-3 rounded-xl border transition-colors ${
              size === "small" ? "bg-primary text-primary-foreground border-primary" : "bg-slate-50 border-slate-200 text-slate-600 hover:border-primary/40"
            }`}
          >
            <span className="block font-bold text-sm">Small company</span>
            <span className={`block text-xs mt-0.5 ${size === "small" ? "opacity-90" : "opacity-70"}`}>Share capital ≤ ₦1m</span>
          </button>
          <button
            type="button"
            onClick={() => setSize("big")}
            className={`text-left px-4 py-3 rounded-xl border transition-colors ${
              size === "big" ? "bg-primary text-primary-foreground border-primary" : "bg-slate-50 border-slate-200 text-slate-600 hover:border-primary/40"
            }`}
          >
            <span className="block font-bold text-sm">Big company</span>
            <span className={`block text-xs mt-0.5 ${size === "big" ? "opacity-90" : "opacity-70"}`}>Share capital &gt; ₦1m</span>
          </button>
        </div>
      </div>

      <div className="mb-7">
        <label className="flex justify-between text-xs font-bold uppercase tracking-wide text-slate-500 mb-3">
          <span>Years owed</span>
          <span className="text-primary text-sm normal-case font-extrabold">{years}</span>
        </label>
        <input
          type="range"
          min={1}
          max={15}
          value={years}
          onChange={(e) => setYears(Number(e.target.value))}
          className="w-full accent-primary"
          aria-label="Years owed"
        />
      </div>

      {needsManualQuote ? (
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <p className="text-sm text-amber-900 font-bold mb-1">This needs a quick manual review</p>
          <p className="text-sm text-amber-800">
            {years} years outstanding is beyond our flat-rate range. Get in touch and we'll confirm your total after a short look at your history.
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
          <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1">Estimated total</p>
          <p className="text-3xl font-extrabold text-primary mb-1">{formatNaira(total)}</p>
          <p className="text-sm text-slate-500">
            {years} year{years > 1 ? "s" : ""} × {formatNaira(rate)}/year ({size === "small" ? "small" : "big"} company)
          </p>
        </div>
      )}

      <p className="text-xs text-slate-400 mt-4 leading-relaxed">
        This estimate covers TidyBiz's service fee. It does not include any CAC statutory penalties, which we'll confirm
        separately once we pull your filing history.
      </p>

      <Link
        to={needsManualQuote ? "/contact" : "/compliance/annual-returns/order"}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-primary transition-colors"
      >
        {needsManualQuote ? "Contact us for a quote" : "Continue with this estimate"}
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

export default AnnualReturnsEstimator;
