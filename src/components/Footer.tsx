import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/40" aria-label="Footer">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10 sm:mb-12">
          {/* Brand Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary">
                <span className="material-symbols-outlined text-[20px]">mood</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-primary">Aura Dental Sanctuary</span>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant max-w-sm leading-relaxed">
              Modern soft-tactile pediatric and multi-generational dental care. Dedicated to zero-anxiety, pain-free treatments, and domestic serenity.
            </p>
            <div className="flex flex-wrap items-center gap-2 text-on-surface-variant pt-1">
              <span className="px-2.5 py-1 rounded bg-surface-container text-[11px] font-bold">
                ISO 9001:2015 Medical Care
              </span>
              <span className="px-2.5 py-1 rounded bg-surface-container text-[11px] font-bold">
                Class-B Autoclave Sterilized
              </span>
            </div>
          </div>

          {/* Treatments Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-primary mb-3">Treatments</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#family-care">
                  Dental Implants
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#family-care">
                  Invisalign &amp; Orthodontics
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#family-care">
                  Smile Makeover
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#family-care">
                  Root Canal Therapy
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#kids-dentistry">
                  Pediatric Care
                </a>
              </li>
            </ul>
          </div>

          {/* Clinical Governance Links */}
          <div>
            <h4 className="text-sm font-bold text-primary mb-3">Clinical Governance</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#faqs">
                  Patient Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#our-doctors">
                  Clinical Ethics &amp; Standards
                </a>
              </li>
              <li>
                <a className="text-on-surface-variant hover:text-primary transition-colors" href="#clinic-comforts">
                  Sterilization Protocol
                </a>
              </li>
              <li>
                <a className="text-primary font-bold underline underline-offset-4" href="#booking-card">
                  Transparent Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Contacts */}
          <div>
            <h4 className="text-sm font-bold text-primary mb-3">Contact &amp; Hours</h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-on-surface-variant">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">call</span>
                <a href="tel:+918049210088" className="hover:text-primary transition-colors">
                  +91 (080) 4921-0088
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">chat</span>
                <a href="https://wa.me/918049210088" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WhatsApp: +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[18px]">mail</span>
                <a href="mailto:care@sproutsmile.com" className="hover:text-primary transition-colors">
                  care@sproutsmile.com
                </a>
              </li>
              <li className="pt-2 text-xs font-bold text-primary">
                Open 7 Days a Week
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Separator */}
        <div className="border-t border-outline-variant/30 pt-6 text-center text-xs text-on-surface-variant">
          © 2024 Aura Dental Sanctuary. Clinical Excellence &amp; Architectural Serenity. All rights reserved. Registered under Clinical Establishments Act.
        </div>
      </div>
    </footer>
  );
};
