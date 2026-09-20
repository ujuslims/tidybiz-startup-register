import { Link } from "react-router-dom";

const rows: { label: string; bn: string; llc: string; bnWarn?: boolean; llcWin?: boolean }[] = [
  {
    label: "Legal identity",
    bn: "Same legal person as the owner — no separation",
    llc: "Separate legal entity; can own property, sign contracts, sue and be sued",
  },
  {
    label: "Personal liability",
    bn: "Unlimited — personal assets exposed to business debt",
    bnWarn: true,
    llc: "Limited — personal assets generally protected",
    llcWin: true,
  },
  {
    label: "How it's taxed",
    bn: "Personal Income Tax on profit, progressive rates",
    llc: "Company Income Tax (25%), plus a 4% Development Levy unless classed as a small company",
  },
  {
    label: "2026 small-company relief",
    bn: "Not eligible — this relief only applies to LLCs",
    bnWarn: true,
    llc: "Companies with turnover under ₦25 million pay 0% Company Income Tax",
    llcWin: true,
  },
  {
    label: "Cost & speed to register",
    bn: "Cheaper, faster — the simplest starting point",
    llc: "Higher CAC fees, more documentation, longer setup",
  },
  {
    label: "Investor / bank perception",
    bn: "Often seen as informal; some banks and procurement portals won't onboard a Business Name",
    llc: "Preferred structure for investors, larger contracts, procurement portals",
    llcWin: true,
  },
  {
    label: "Best fit",
    bn: "Solo hustles, freelancers, early-stage testing an idea",
    llc: "Anyone planning to raise money, scale revenue, or take on real contract risk",
  },
];

const BnVsLlcComparison = () => (
  <div className="bg-white border border-slate-200 rounded-3xl p-6 lg:p-10 shadow-sm">
    <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Business Name or Limited Company?</h3>
    <p className="text-slate-600 mb-8 max-w-2xl">
      With Nigeria's 2026 tax reforms in effect, this choice affects more than paperwork — it changes what you pay in
      tax. Here's the honest comparison, and it's exactly the kind of decision our pre-registration advisory can help
      you think through before you file anything.
    </p>

    <div className="overflow-x-auto -mx-6 lg:-mx-10 px-6 lg:px-10">
      <table className="w-full text-sm min-w-[560px] border-collapse">
        <thead>
          <tr>
            <th className="text-left py-3 pr-4"></th>
            <th className="text-left py-3 pr-4 font-extrabold text-slate-900">Business Name</th>
            <th className="text-left py-3 font-extrabold text-slate-900">LLC (Ltd)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.label} className="border-t border-slate-100 align-top">
              <td className="py-4 pr-4 font-bold text-slate-500 w-1/5">{row.label}</td>
              <td className={`py-4 pr-4 ${row.bnWarn ? "text-red-600 font-semibold" : "text-slate-600"}`}>{row.bn}</td>
              <td className={`py-4 ${row.llcWin ? "text-primary font-semibold" : "text-slate-600"}`}>{row.llc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-xs text-slate-400 mt-6 leading-relaxed">
      The ₦25 million small-company turnover threshold reflects current 2026 tax reform guidance and should be
      reconfirmed against the Finance Act text or current FIRS guidance periodically, as interpretation has varied
      across public commentary.
    </p>

    <Link
      to="/registration/pre-registration-advisory"
      className="mt-6 inline-flex items-center gap-2 text-primary font-bold hover:underline"
    >
      Talk through which fits your business →
    </Link>
  </div>
);

export default BnVsLlcComparison;
