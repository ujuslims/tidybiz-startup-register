type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
};

const SectionHeading = ({ eyebrow, title, description, align = "center", light }: Props) => (
  <div
    className={`max-w-3xl mb-14 ${align === "center" ? "text-center mx-auto" : ""}`}
  >
    {eyebrow && (
      <span className={`inline-block py-1 px-3 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${light ? "bg-white/10 text-white" : "bg-primary/10 text-primary"}`}>
        {eyebrow}
      </span>
    )}
    <h2 className={`text-3xl md:text-4xl font-extrabold tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
      {title}
    </h2>
    {description && (
      <p className={`text-lg mt-4 leading-relaxed ${light ? "text-slate-300" : "text-slate-600"}`}>{description}</p>
    )}
  </div>
);

export default SectionHeading;
