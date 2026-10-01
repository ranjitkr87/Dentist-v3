import React from 'react';

interface ClinicTourProps {
  onBookClick: () => void;
}

export const ClinicTour: React.FC<ClinicTourProps> = ({ onBookClick }) => {
  const perks = [
    {
      icon: 'smart_display',
      title: 'Ceiling Cartoon Screens',
      description: 'Kids watch their favorite animated shows with wireless headphones during care.',
    },
    {
      icon: 'family_star',
      title: 'Parent-Lounge Rooms',
      description: 'Parents can sit right alongside their child, holding hands comfortably throughout.',
    },
    {
      icon: 'sentiment_calm',
      title: 'Gentle Relaxation Gas',
      description: 'Mild sweet-smelling nitrous oxide allows fearful teens and adults to fully relax.',
    },
    {
      icon: 'redeem',
      title: 'The Brave Kid Prize Chest',
      description: 'Every brave boy and girl picks their own reward, building excitement for regular visits.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-surface-container-low/40" id="clinic-comforts" aria-label="Clinic Tour and Comfort Features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Visual: Clinic Tour Image */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden border border-outline-variant/40 custom-floating-shadow">
              <img
                src="https://lh3.googleusercontent.com/aida/AEtjO1XvuRAzMxeckcVhfMDELDeHWKv_mCmCq9rUMqYapjpcqB15YMD2xkezyGxtuS0KIw775RQ5uT2MHGCHHe_DgAtjL4KWf1gSElbvVT8iohZrwwLnHQ5umdWmx4174q9a8MTFfctVUsCFja-q85uXB6JyhpBF8NIX_fasxOyCMVyCSJ1guc9IosNsuN3fXdSisOmv7UvwNRh3FZcNDHXM5lG-6pBpOpZ6PUumHjqSZUFyl3iIsVTqPOwvi7U"
                alt="Modern warm architectural dental clinic suite with natural light, warm oak wood panels, and comfortable treatment dental chair"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
                width={600}
                height={450}
              />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-5 -right-2 sm:-right-5 bg-surface-container-lowest p-3.5 sm:p-4 rounded-xl border border-outline-variant/30 custom-diffuse-shadow flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center text-primary font-bold">
                <span className="material-symbols-outlined text-[22px]">spa</span>
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-on-surface">Architectural Serenity</p>
                <p className="text-[11px] sm:text-xs text-on-surface-variant">Acoustic dampening &amp; gentle aromatics</p>
              </div>
            </div>
          </div>

          {/* Right Content: Friendly Perks */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-wider text-primary font-bold bg-surface-container px-3.5 py-1.5 rounded-full inline-block">
              Domestic Warmth, Not Clinical Coldness
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-on-surface leading-tight tracking-tight">
              How We Make Dental Visits Happy, Relaxing, and Stress-Free
            </h2>
            <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              We understand dental phobia is real for adults and scary for toddlers. Our sanctuary is purposefully crafted to banish the smell, sounds, and stark white lighting of traditional hospital clinics.
            </p>

            {/* 4 Friendly Perks List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {perks.map((perk, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/30">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-primary mb-2">
                    <span className="material-symbols-outlined text-[20px]">{perk.icon}</span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-on-surface">{perk.title}</h4>
                  <p className="text-xs text-on-surface-variant mt-1 leading-normal">{perk.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onBookClick}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary px-6 py-3 rounded-full text-sm sm:text-base font-bold transition-all shadow-sm hover:shadow cursor-pointer"
              >
                <span>Experience Gentle Family Care</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
