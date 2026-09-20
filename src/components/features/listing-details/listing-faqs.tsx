import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { ListingItem } from "@/data";

interface ListingFAQsProps {
  listing: ListingItem;
}

export function ListingFAQs({ listing }: ListingFAQsProps) {
  const faqs = listing.faqs || [
    {
      question: `What is ${listing.name}?`,
      answer: `${listing.name} is a premier business operating in ${listing.category} located in ${listing.city}.`,
    },
    {
      question: `Where is ${listing.name} located?`,
      answer: `${listing.name} is located at ${listing.address}.`,
    },
    {
      question: `How can I contact ${listing.name}?`,
      answer: `You can reach ${listing.name} by calling ${listing.phone} or via their listed email and website.`,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.04)] space-y-5">
      <h2 className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight flex items-center gap-2">
        <HelpCircle size={22} className="text-indigo-600" />
        <span>Frequently Asked Questions</span>
      </h2>

      <Accordion defaultValue={["item-0"]} className="space-y-3.5">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-2xl border border-slate-200/80 bg-slate-50/40 hover:bg-slate-50/70 shadow-xs overflow-hidden border-b-0 transition-colors"
          >
            <AccordionTrigger className="px-5 py-4 font-bold text-slate-900 text-sm sm:text-[0.95rem] hover:no-underline hover:text-indigo-600 transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed font-normal border-t border-slate-100 pt-3">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
