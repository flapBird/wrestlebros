"use client";

import { useId, useState } from "react";

interface Faq {
  question: string;
  answer: string;
}

function FaqItem({ question, answer }: Faq) {
  const [open, setOpen] = useState(false);
  const contentId = useId();

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={contentId}
          className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left font-heading font-bold text-ink transition-colors hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
        >
          <span>{question}</span>
          <svg
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </h3>
      {open && (
        <div
          id={contentId}
          className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-700"
        >
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FaqList({ faqs }: { faqs: readonly Faq[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
}
