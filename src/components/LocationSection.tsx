import React from 'react';

interface LocationSectionProps {
  onBookClick: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onBookClick }) => {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-surface-container-low/30 border-t border-outline-variant/30" id="contact-location" aria-label="Clinic Location and Timings">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Info Details */}
          <div className="lg:col-span-6 bg-surface-container-lowest p-6 sm:p-8 rounded-2xl border border-outline-variant/30 custom-diffuse-shadow flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-wider text-primary font-bold bg-surface-container px-3.5 py-1.5 rounded-full inline-block">
                Easy to Find Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface mt-3 tracking-tight">
                Visit Sprout &amp; Smile in Indiranagar
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                Centrally located on 100 Feet Road with dedicated valet parking and full stroller / wheelchair ramp accessibility.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">location_on</span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-on-surface">Clinic Address</h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                      #412, 2nd Floor, 100 Feet Road, Near CMH Junction, Indiranagar, Bengaluru, Karnataka 560038
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">schedule</span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-on-surface">Working Hours</h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant">Monday – Friday: 9:00 AM – 8:30 PM</p>
                    <p className="text-xs sm:text-sm text-primary font-bold mt-0.5">
                      Saturday &amp; Sunday: 9:30 AM – 7:00 PM (Full Team Active)
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px] mt-0.5 shrink-0">local_parking</span>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-on-surface">Family Convenience</h4>
                    <p className="text-xs sm:text-sm text-on-surface-variant">
                      Complimentary valet parking, elevator access, nursing baby-care station on-site.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-outline-variant/20 flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
              <a
                href="tel:+918049210088"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold shadow-sm transition-all"
                aria-label="Direct call to clinic"
              >
                <span className="material-symbols-outlined text-[18px]">call</span>
                <span>+91 (080) 4921-0088</span>
              </a>
              <a
                href="https://maps.google.com/?q=100+Feet+Road+Indiranagar+Bangalore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-surface-container hover:bg-surface-variant text-primary px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all"
                aria-label="Open location in Google Maps"
              >
                <span className="material-symbols-outlined text-[18px]">near_me</span>
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Visual Map Card */}
          <div className="lg:col-span-6 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 custom-diffuse-shadow overflow-hidden relative min-h-[340px] flex items-center justify-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDW28fULCH_lkIgOV21aNEpCJM_KXjxKxXhTYzhZBsSjVcufFch2a3ajC-jc3yMnngFuFZ2FvB07OJXKB5Bmu6AOI7o6mvwUPmIJnAxI4kZiXwO08YdDmltP6d9_tMTjpUuvQOYHpNAt55PXx7zYllLSGf8VpQiMzYctmQ2Moa5ZpTVQipCJruOuRTKGd4kiFHc7XySWuOZJWG68rzzlsamznIy_6f5FK37_AlpUGbMTjt2mGwpPqZk"
              alt="Illustrated map of 100 Feet Road Indiranagar Bangalore showing Sprout and Smile Family Dental Sanctuary"
              className="w-full h-full object-cover min-h-[340px]"
              loading="lazy"
              width={600}
              height={400}
            />

            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 bg-surface-container-lowest/95 backdrop-blur-md p-3.5 sm:p-4 rounded-xl border border-outline-variant/40 custom-floating-shadow flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                  <span className="material-symbols-outlined text-[20px]">pin_drop</span>
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-on-surface">Sprout &amp; Smile Family Sanctuary</p>
                  <p className="text-[11px] sm:text-xs text-outline">Next to Starbucks • Opposite Metro Pillar 124</p>
                </div>
              </div>
              <button
                onClick={onBookClick}
                className="bg-primary hover:bg-primary-container text-on-primary text-xs font-bold px-3 py-2 rounded-full hidden sm:inline-block transition-colors cursor-pointer"
              >
                Book Slot
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
