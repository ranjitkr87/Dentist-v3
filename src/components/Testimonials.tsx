import React from 'react';
import { TESTIMONIALS_DATA } from '../data/clinicData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-surface-container-low/40 border-t border-outline-variant/20" aria-label="Patient Testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-surface-container-high px-3.5 py-1.5 rounded-full inline-block">
            Community Love
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-on-surface mt-3 tracking-tight">
            Stories from Bangalore Families
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-2.5 leading-relaxed">
            Read how we turned anxious visits into tear-free checkups for three generations of patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((review) => (
            <article
              key={review.id}
              className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 custom-diffuse-shadow flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                <div className="flex items-center text-tertiary gap-0.5 mb-3" aria-label={`${review.rating} out of 5 stars`}>
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-filled text-[18px] text-tertiary">
                      star
                    </span>
                  ))}
                </div>
                <blockquote className="text-xs sm:text-sm text-on-surface-variant italic mb-6 leading-relaxed">
                  {review.text}
                </blockquote>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-outline-variant/20">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                    review.initials === 'PV'
                      ? 'bg-surface-variant text-primary'
                      : review.initials === 'SK'
                      ? 'bg-secondary-fixed text-secondary'
                      : 'bg-tertiary-fixed text-tertiary'
                  }`}
                >
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-on-surface">
                    {review.name}
                  </h4>
                  <p className="text-[11px] sm:text-xs text-outline font-medium">
                    {review.role} • {review.location}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
