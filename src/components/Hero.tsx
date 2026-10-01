import React from 'react';

interface HeroProps {
  onBookClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookClick }) => {
  return (
    <section className="relative overflow-hidden py-10 md:py-16 lg:py-20" aria-label="Hero Introduction">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Trust Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container-high border border-outline-variant/40 w-fit text-primary font-bold text-xs sm:text-sm">
              <span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>
              <span>Indiranagar's Most Loved Multi-Generational Dental Practice</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-on-surface font-extrabold tracking-tight leading-[1.15]">
              Gentle, Caring Dentistry for Every Generation in Your Family.
            </h1>

            {/* Hero Subtext */}
            <p className="text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              From your toddler's first giggle in the dentist chair to discreet clear aligners for teens and pain-free restorative care for grandparents. Step into a sunny, zero-anxiety sanctuary built on domestic warmth and medical excellence.
            </p>

            {/* Trust Guarantees Chips */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface text-xs sm:text-sm font-semibold shadow-xs">
                <span className="material-symbols-outlined text-primary text-[18px]">child_care</span>
                Kid-Friendly Certified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface text-xs sm:text-sm font-semibold shadow-xs">
                <span className="material-symbols-outlined text-primary text-[18px]">sentiment_very_satisfied</span>
                Zero-Tears Guarantee
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-lowest border border-outline-variant/30 text-on-surface text-xs sm:text-sm font-semibold shadow-xs">
                <span className="material-symbols-outlined text-primary text-[18px]">receipt_long</span>
                No Hidden Fees Ever
              </span>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-3">
              <button
                onClick={onBookClick}
                className="bg-primary hover:bg-primary-container text-on-primary px-7 py-3.5 rounded-full text-base font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">family_restroom</span>
                <span>Book Family Appointment</span>
              </button>
              <a
                href="https://wa.me/918049210088?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20dental%20appointments%20at%20Sprout%20%26%20Smile."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface-container-lowest border border-primary text-primary hover:bg-surface-container-high px-6 py-3.5 rounded-full text-base font-bold text-center transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Social Proof Micro-snippet */}
            <div className="flex items-center gap-4 pt-3 border-t border-outline-variant/30">
              <div className="flex -space-x-2 shrink-0">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-surface-container-lowest bg-surface-variant flex items-center justify-center font-bold text-primary text-xs">
                  RJ
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-surface-container-lowest bg-secondary-fixed flex items-center justify-center font-bold text-secondary text-xs">
                  PK
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-surface-container-lowest bg-tertiary-fixed flex items-center justify-center font-bold text-tertiary text-xs">
                  AS
                </div>
              </div>
              <div>
                <div className="flex items-center text-tertiary gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-filled text-[16px] text-tertiary">
                      star
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant font-medium">
                  <strong>4.9 / 5</strong> from 1,200+ verified Bangalore parents
                </p>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary-fixed-dim/40 to-surface-container rounded-3xl filter blur-2xl opacity-70 -z-10" />

            <div className="relative bg-surface-container-lowest p-2.5 sm:p-3 rounded-2xl border border-outline-variant/30 custom-diffuse-shadow">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnYe2QO5reP3J348sgNeTqFys9JiOl7uJ6b3mtn__m964THTOmkWub0nmgByezMFLYOGdnIXJ_b-FmU6j66NlFoRk4mtr_KVqLjwMBm5jkb6FqJ1sMzQBf--IzguL5wWA_D-YzPBRH1o2HGpgXmj6mAj8oqKxPkfgVy0-GwTqLl23rNrDDzT7Y0wsyvrCK7vxdGVwMI_er1DmEsIg7DFM8Jms1GXT5k_HzXTilIedUZ-Wm40VC83H2"
                alt="Smiling happy Indian parents with young daughter in modern pediatric dental clinic with caring doctor"
                className="w-full h-auto object-cover rounded-xl shadow-inner aspect-[4/3]"
                loading="eager"
                fetchPriority="high"
                width={600}
                height={450}
              />

              {/* Floating Doctor Care Badge */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-3 sm:-left-6 bg-surface-container-lowest border border-outline-variant/40 p-3 sm:p-4 rounded-xl custom-floating-shadow max-w-[260px] sm:max-w-xs flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-surface-container-high shrink-0 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[24px] sm:text-[28px]">medical_services</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-primary font-bold leading-tight">Dr. Ananya Sharma, MDS</p>
                  <p className="text-[11px] sm:text-xs text-on-surface-variant leading-tight mt-0.5">
                    &amp; Dedicated Pediatric Specialists on-site
                  </p>
                </div>
              </div>

              {/* Weekend Open Pill Badge */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-outline-variant/40 shadow-sm flex items-center gap-1.5 text-xs font-semibold text-on-surface">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
                <span>Open Saturday &amp; Sunday</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
