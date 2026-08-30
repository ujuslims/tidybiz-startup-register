import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type Faq = { q: string; a: string };

const FaqList = ({ faqs }: { faqs: Faq[] }) => (
  <Accordion type="single" collapsible className="w-full space-y-4">
    {faqs.map((faq, i) => (
      <AccordionItem
        key={i}
        value={`item-${i}`}
        className="bg-white border border-slate-200 rounded-2xl px-6 data-[state=open]:border-primary/40 data-[state=open]:shadow-lg data-[state=open]:shadow-primary/5 transition-all"
      >
        <AccordionTrigger className="text-left text-base font-semibold text-slate-900 hover:no-underline py-5">
          {faq.q}
        </AccordionTrigger>
        <AccordionContent className="text-slate-600 leading-relaxed pb-5">{faq.a}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FaqList;
