import React, { useState } from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';

interface ClaimScanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClaimScanModal: React.FC<ClaimScanModalProps> = ({ isOpen, onClose }) => {
  const [parentName, setParentName] = useState('');
  const [childAge, setChildAge] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hello Sprout & Smile! I'd like to claim the complimentary 3D Digital Cavity Scan for my child (${childAge || 'under 10'}). Name: ${parentName}, Phone: ${phone}.`
    );
    window.open(`https://wa.me/918049210088?text=${text}`, '_blank');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="claim-modal-title"
    >
      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl p-6 sm:p-8 shadow-2xl border border-outline-variant/30 text-on-surface">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-outline hover:text-on-surface rounded-full hover:bg-surface-container transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider mb-2">
              <Sparkles className="w-4 h-4 text-tertiary" />
              <span>Limited Month Special • Indiranagar Families</span>
            </div>
            <h2 id="claim-modal-title" className="text-2xl font-extrabold text-on-surface tracking-tight">
              Claim Complimentary 3D Digital Cavity Scan
            </h2>
            <p className="text-sm text-on-surface-variant mt-2 leading-relaxed">
              Zero radiation, radiation-safe optical 3D scan for children under 10. Detects microscopic enamel weakness before cavities start.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-on-surface mb-1">Parent's Full Name</label>
                <input
                  type="text"
                  required
                  value={parentName}
                  onChange={(e) => setParentName(e.target.value)}
                  placeholder="e.g. Priyadarshini Rao"
                  className="w-full rounded-xl border border-outline-variant/50 px-4 py-2.5 bg-surface/30 focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">Child's Age</label>
                  <select
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    className="w-full rounded-xl border border-outline-variant/50 px-3 py-2.5 bg-surface/30 focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                  >
                    <option value="1-2 years">1 - 2 years</option>
                    <option value="3-5 years">3 - 5 years</option>
                    <option value="6-8 years">6 - 8 years</option>
                    <option value="9-10 years">9 - 10 years</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-on-surface mb-1">Mobile / WhatsApp</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765..."
                    className="w-full rounded-xl border border-outline-variant/50 px-4 py-2.5 bg-surface/30 focus:border-primary focus:ring-1 focus:ring-primary text-sm"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-semibold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Reserve Free Child Scan Voucher</span>
                </button>
              </div>

              <p className="text-center text-xs text-outline">
                Includes complimentary oral hygiene chart & toy chest pick for your child.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-16 h-16 bg-surface-container rounded-full flex items-center justify-center text-primary mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-on-surface">Voucher Reserved!</h3>
            <p className="text-sm text-on-surface-variant max-w-sm mx-auto">
              Thank you, <strong>{parentName}</strong>. Your complimentary scan spot for your child ({childAge}) has been registered.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppRedirect}
                className="w-full py-3 px-4 rounded-full bg-[#00685f] hover:bg-[#008378] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
              >
                <span>Confirm on WhatsApp Now</span>
                <span className="material-symbols-outlined text-[18px]">chat</span>
              </button>
              <button
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-full border border-outline-variant text-on-surface text-sm font-medium hover:bg-surface-container transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
