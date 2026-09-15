"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Clock } from "lucide-react";

const faqs = [
  {
    question: "How do I list my business?",
    answer:
      "Click \"Add Listing\" at the top of any page, fill in your business details, and submit. It's completely free and takes less than 5 minutes.",
  },
  {
    question: "How long does approval take?",
    answer:
      "Our team reviews listings within 24–48 hours. You'll get an email notification once your listing is approved.",
  },
  {
    question: "Can I edit my listing after submission?",
    answer:
      "Yes! Login to your dashboard to update your business details, add photos, or change your contact information anytime.",
  },
  {
    question: "Is it really free to list?",
    answer:
      "Yes, basic listings are completely free. We also offer premium featured plans to boost your visibility.",
  },
];

export function ContactFaq() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
        Frequently Asked Questions
      </h2>

      {/* Accordion List */}
      <Accordion className="space-y-3.5">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.question}
            value={`item-${index}`}
            className="rounded-2xl border border-slate-100 bg-white shadow-xs overflow-hidden border-b-0"
          >
            <AccordionTrigger className="px-5 py-4 font-bold text-slate-900 text-sm sm:text-[0.95rem] hover:no-underline hover:text-indigo-600 transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-5 pb-5 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-50 pt-3">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Response Time Notice Card */}
      <div className="bg-indigo-50/70 border border-indigo-100/80 rounded-2xl p-5 sm:p-6 flex items-start gap-4 shadow-2xs">
        <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0 mt-0.5">
          <Clock size={20} />
        </div>
        <div className="space-y-1">
          <h3 className="font-bold text-sm text-slate-900">
            Response Time
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            We typically respond to all enquiries within{" "}
            <strong className="text-slate-900 font-semibold">1 business day</strong>
            . For urgent issues, please call us directly.
          </p>
        </div>
      </div>
    </div>
  );
}
