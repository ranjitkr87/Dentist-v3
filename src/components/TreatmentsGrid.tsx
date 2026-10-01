import React, { useState } from 'react';
import { TREATMENTS_DATA } from '../data/clinicData';
import { TreatmentItem } from '../types';

interface TreatmentsGridProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const TreatmentsGrid: React.FC<TreatmentsGridProps> = ({ onSelectTreatment }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterOptions = [
    { label: 'All Treatments', value: 'all' },
    { label: 'Kids (1-14)', value: 'kids' },
    { label: 'Preventive', value: 'preventive' },
    { label: 'Aligners & Ortho', value: 'orthodontics' },
    { label: 'Root Canals', value: 'endodontics' },
    { label: 'Implants (Seniors)', value: 'implants' },
    { label: 'Emergency', value: 'emergency' },
  ];

  const filteredTreatments = activeFilter === 'all'
    ? TREATMENTS_DATA
    : TREATMENTS_DATA.filter((t) => t.category === activeFilter);

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-surface" id="family-care" aria-label="Our Dental Treatments">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-surface-container-high px-3.5 py-1.5 rounded-full inline-block">
            Complete Family Care
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-on-surface mt-3 tracking-tight">
            Thoughtful Treatments for Every Stage of Life
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-2.5 leading-relaxed">
            From early prevention milestones to advanced smile rehabilitation, each treatment is engineered for zero discomfort and clear upfront estimates.
          </p>
        </div>

        {/* Filter Pills for Enhanced Interactivity */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-8 sm:mb-12">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeFilter === filter.value
                  ? 'bg-primary text-on-primary shadow-sm'
                  : 'bg-surface-container-lowest text-on-surface border border-outline-variant/40 hover:bg-surface-container'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment: TreatmentItem) => (
            <article
              key={treatment.id}
              id={treatment.id === 'kids-dentistry' ? 'kids-dentistry' : undefined}
              className="bg-surface-container-lowest rounded-2xl p-6 border border-outline-variant/30 custom-diffuse-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${treatment.badgeColor}`}>
                    {treatment.badge}
                  </span>
                  <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[20px]">{treatment.icon}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-on-surface mb-2 leading-snug">
                  {treatment.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed mb-4">
                  {treatment.description}
                </p>

                <ul className="space-y-2 text-xs sm:text-sm text-on-surface mb-6">
                  {treatment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-[18px] shrink-0">check_circle</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className={`text-xs sm:text-sm font-bold ${treatment.category === 'emergency' ? 'text-tertiary' : 'text-primary'}`}>
                  {treatment.priceInfo}
                </span>

                {treatment.category === 'emergency' ? (
                  <a
                    href="tel:+918049210088"
                    className="text-tertiary hover:text-tertiary-container text-xs sm:text-sm font-bold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>{treatment.actionText}</span>
                  </a>
                ) : (
                  <button
                    onClick={() => onSelectTreatment(treatment.title)}
                    className="text-primary hover:text-primary-container text-xs sm:text-sm font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>{treatment.actionText}</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
