import React, { useState } from "react";
import { Menu, X, PhoneCall, Calendar } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Treatments", href: "#family-care" },
    { label: "Doctors", href: "#our-doctors" },
    { label: "Transformation", href: "#patient-journey" },
    { label: "Clinic Tour", href: "#clinic-comforts" },
    { label: "Contact", href: "#contact-location" },
  ];

  return (
    <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-40 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)]">
      <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto h-20 gap-4">
        {/* Logo Branding */}
        <a
          href="#"
          className="flex items-center gap-2.5 shrink-0 group"
          aria-label="Sprout & Smile Family Dentistry Home"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-xs group-hover:scale-105 transition-transform shrink-0">
            <span className="material-symbols-outlined text-[22px]">mood</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg xl:text-xl font-extrabold text-primary tracking-tight leading-none whitespace-nowrap">
              Sprout &amp; Smile
            </span>
            <span className="text-[10px] text-outline tracking-wider font-bold">
              FAMILY DENTISTRY
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links with generous breathing room */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center justify-center gap-3.5 xl:gap-6 2xl:gap-8 px-2"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`${
                link.active
                  ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                  : "text-on-surface-variant hover:text-primary transition-colors font-semibold"
              } text-xs xl:text-sm whitespace-nowrap py-1`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Trailing Action Cluster */}
        <div className="flex items-center gap-2 xl:gap-3 shrink-0">
          {/* WhatsApp Quick Chat Icon */}
          <a
            href="https://wa.me/918049210088?text=Hello%20Sprout%20%26%20Smile!%20I'd%20like%20to%20inquire%20about%20a%20family%20appointment."
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-surface-container hover:bg-surface-variant flex items-center justify-center text-primary transition-all cursor-pointer shrink-0"
            aria-label="Chat with our patient care team on WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-[19px] h-[19px] xl:w-5 xl:h-5"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.6 5.96L.04 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.43ZM12.05 21.8h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.9 9.9 0 1 1 8.38 4.62Zm5.43-7.42c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
          </a>

          {/* Primary Call to Action Button */}
          <button
            onClick={onBookClick}
            className="bg-primary hover:bg-primary-container text-on-primary px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full text-xs xl:text-sm font-bold shadow-xs hover:shadow transition-all active:scale-[0.98] flex items-center gap-1.5 whitespace-nowrap cursor-pointer shrink-0"
            aria-label="Book an appointment"
          >
            <span>Book Appointment</span>
            <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
          </button>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-surface-container transition-colors"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-outline-variant/30 bg-surface/98 backdrop-blur-lg px-4 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 px-3 rounded-xl transition-colors ${
                  link.active
                    ? "bg-surface-container text-primary font-bold"
                    : "text-on-surface hover:bg-surface-container/50"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-outline-variant/30 flex flex-col gap-3">
              <a
                href="tel:+918049210088"
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-bold text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Emergency: +91 (080) 4921-0088</span>
              </a>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full py-3.5 rounded-full bg-primary text-on-primary font-bold text-sm shadow flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Family Appointment</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
