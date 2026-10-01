import React, { useState } from 'react';
import { FAQS_DATA } from '../data/clinicData';

export const FAQSection: React.FC = () => {
  // Allow interactive toggle while keeping all accessible
  const [openId, setOpenId] = useState<string>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-surface" id="faqs" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-surface-container-high px-3.5 py-1.5 rounded-full inline-block">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-on-surface mt-3 tracking-tight">
            Frequently Asked Questions by Parents
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-surface-container-lowest rounded-xl border border-outline-variant/30 p-5 transition-all duration-200 ${
                  isOpen ? 'shadow-sm border-primary/40' : 'hover:border-outline-variant'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex justify-between items-center text-left cursor-pointer gap-4"
                >
                  <span className="text-sm sm:text-base text-on-surface font-bold">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-primary text-[22px] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div id={`faq-answer-${faq.id}`} className="mt-3 pt-3 border-t border-outline-variant/15 animate-fadeIn">
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
