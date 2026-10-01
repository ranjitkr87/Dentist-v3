import React, { useState, forwardRef } from 'react';
import { CLINIC_SERVICES_OPTIONS, CLINIC_TIMING_OPTIONS } from '../data/clinicData';
import { BookingFormState } from '../types';
import { CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';

interface BookingSectionProps {
  initialService?: string;
  initialDoctor?: string;
}

export const BookingSection = forwardRef<HTMLDivElement, BookingSectionProps>(
  ({ initialService }, ref) => {
    const [formState, setFormState] = useState<BookingFormState>({
      visitType: 'child',
      fullName: '',
      phone: '',
      service: initialService || CLINIC_SERVICES_OPTIONS[0],
      timing: CLINIC_TIMING_OPTIONS[0],
      notes: '',
    });

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
    const [bookingReference, setBookingReference] = useState<string>('');

    // Update service if prop changes
    React.useEffect(() => {
      if (initialService) {
        setFormState((prev) => ({ ...prev, service: initialService }));
      }
    }, [initialService]);

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const refCode = `SS-${Math.floor(100000 + Math.random() * 900000)}`;
      setBookingReference(refCode);
      setIsSubmitted(true);
    };

    const handleWhatsAppConfirm = () => {
      const typeLabel =
        formState.visitType === 'child'
          ? 'Child Checkup'
          : formState.visitType === 'adult'
          ? 'Adult & Teen'
          : 'Senior / Toothache';

      const message = `Hello Sprout & Smile Family Dental! I'd like to reserve an appointment:
• Booking Ref: ${bookingReference}
• Name: ${formState.fullName}
• Patient Type: ${typeLabel}
• Service: ${formState.service}
• Preferred Time: ${formState.timing}
${formState.notes ? `• Notes: ${formState.notes}` : ''}`;

      window.open(`https://wa.me/918049210088?text=${encodeURIComponent(message)}`, '_blank');
    };

    return (
      <section className="py-14 sm:py-20 md:py-24 bg-surface" id="booking-card" ref={ref} aria-label="Appointment Booking and Pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Side: Interactive Booking Form */}
            <div className="lg:col-span-7 bg-surface-container-lowest rounded-2xl p-6 sm:p-8 md:p-10 border border-outline-variant/30 custom-diffuse-shadow">
              <div className="mb-6 sm:mb-8">
                <span className="px-3.5 py-1.5 rounded-full bg-surface-container text-primary font-bold text-xs uppercase tracking-wider inline-block">
                  Fast Online Schedule
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-on-surface mt-2.5 tracking-tight">
                  Book Your Family Visit
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-1.5 leading-relaxed">
                  Select your treatment category, choose a comfortable day, and we'll confirm via WhatsApp in 10 minutes.
                </p>
              </div>

              {!isSubmitted ? (
                <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
                  {/* Type of Appointment Radio Buttons */}
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-on-surface mb-2">
                      Who is this appointment for?
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                      {[
                        { id: 'child', label: 'Child Checkup' },
                        { id: 'adult', label: 'Adult & Teen' },
                        { id: 'senior', label: 'Senior / Toothache' },
                      ].map((item) => (
                        <label
                          key={item.id}
                          className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                            formState.visitType === item.id
                              ? 'border-primary bg-surface-container text-primary font-bold shadow-xs'
                              : 'border-outline-variant/40 bg-surface/40 hover:border-primary/60 text-on-surface'
                          }`}
                        >
                          <input
                            type="radio"
                            name="visit_type"
                            value={item.id}
                            checked={formState.visitType === item.id}
                            onChange={() => setFormState({ ...formState, visitType: item.id as any })}
                            className="text-primary focus:ring-primary w-4 h-4 cursor-pointer"
                          />
                          <span className="text-xs sm:text-sm">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Parent & Patient Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-on-surface mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.fullName}
                        onChange={(e) => setFormState({ ...formState, fullName: e.target.value })}
                        placeholder="e.g. Radhika Sharma"
                        className="w-full rounded-xl border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary text-xs sm:text-sm py-3 px-4 bg-surface/30"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-on-surface mb-1.5">
                        Mobile / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary text-xs sm:text-sm py-3 px-4 bg-surface/30"
                      />
                    </div>
                  </div>

                  {/* Treatment of Interest & Preferred Day */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-on-surface mb-1.5">
                        Service Needed
                      </label>
                      <select
                        value={formState.service}
                        onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                        className="w-full rounded-xl border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary text-xs sm:text-sm py-3 px-4 bg-surface/30"
                      >
                        {CLINIC_SERVICES_OPTIONS.map((srv) => (
                          <option key={srv} value={srv}>
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-on-surface mb-1.5">
                        Preferred Timing
                      </label>
                      <select
                        value={formState.timing}
                        onChange={(e) => setFormState({ ...formState, timing: e.target.value })}
                        className="w-full rounded-xl border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary text-xs sm:text-sm py-3 px-4 bg-surface/30"
                      >
                        {CLINIC_TIMING_OPTIONS.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special Requests / Notes */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-on-surface mb-1.5">
                      Any anxieties, child age, or symptoms? (Optional)
                    </label>
                    <textarea
                      rows={2}
                      value={formState.notes}
                      onChange={(e) => setFormState({ ...formState, notes: e.target.value })}
                      placeholder="e.g. My 5-year-old is slightly nervous about the chair..."
                      className="w-full rounded-xl border border-outline-variant/40 focus:border-primary focus:ring-1 focus:ring-primary text-xs sm:text-sm py-2.5 px-4 bg-surface/30"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-container text-on-primary py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-bold shadow-md hover:shadow-lg transition-all active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[20px]">check_circle</span>
                    <span>Confirm &amp; Reserve Family Slot</span>
                  </button>
                </form>
              ) : (
                /* Success Confirmation State */
                <div
                  className="p-6 rounded-2xl bg-surface-container border border-primary text-on-surface space-y-4 animate-fadeIn"
                  role="status"
                  aria-live="polite"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-primary">
                        Appointment Slot Reserved!
                      </h3>
                      <p className="text-xs text-on-surface-variant font-medium">
                        Booking Reference: <strong className="text-primary">{bookingReference}</strong>
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-on-surface leading-relaxed">
                    Thank you <strong>{formState.fullName}</strong>. We have prioritized your{' '}
                    <strong>{formState.service}</strong> request for <strong>{formState.timing}</strong>.
                    Our front-desk care coordinator will verify via WhatsApp within 10 minutes.
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleWhatsAppConfirm}
                      className="flex-1 py-3 px-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Confirm Faster via WhatsApp</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="py-3 px-5 rounded-full border border-outline-variant hover:bg-surface text-xs sm:text-sm font-semibold text-on-surface transition-colors"
                    >
                      Book Another Member
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Right Side: Transparent Pricing & Insurance Card */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-outline-variant/30 custom-diffuse-shadow">
                <div className="flex items-center gap-2 mb-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
                  <h3 className="text-lg sm:text-xl font-bold text-on-surface">
                    Transparent Honest Pricing
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-on-surface-variant mb-5 sm:mb-6 leading-relaxed">
                  We despise hidden clinic surcharges. You receive a printed itemized breakdown prior to any treatment commencing.
                </p>

                <div className="space-y-3 text-xs sm:text-sm border-b border-outline-variant/20 pb-5 sm:pb-6 mb-5 sm:mb-6">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-on-surface font-medium">Child Consultation &amp; Digital Scan</span>
                    <span className="text-primary font-bold">₹800</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-on-surface font-medium">Ultrasonic Adult Stain Scaling</span>
                    <span className="text-primary font-bold">₹1,500</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-on-surface font-medium">Tooth Colored Composite Filling</span>
                    <span className="text-primary font-bold">₹1,800 - ₹2,400</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-on-surface font-medium">Single-Visit Micro Root Canal</span>
                    <span className="text-primary font-bold">₹4,500</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-on-surface font-medium">Clear Aligners Full Case (Flexible EMI)</span>
                    <span className="text-primary font-bold">From ₹45,000</span>
                  </div>
                </div>

                {/* Insurance & EMI Support Badges */}
                <div>
                  <p className="text-xs font-bold text-on-surface uppercase tracking-wider mb-2">
                    Accepted Payment Modes
                  </p>
                  <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs text-on-surface-variant font-medium">
                    <span className="px-2.5 py-1 rounded-md bg-surface-container">0% Interest 6-Month EMIs</span>
                    <span className="px-2.5 py-1 rounded-md bg-surface-container">All Major Dental Health Cards</span>
                    <span className="px-2.5 py-1 rounded-md bg-surface-container">UPI &amp; Corporate Dental Cover</span>
                  </div>
                </div>
              </div>

              {/* Emergency Banner Card */}
              <div className="bg-tertiary-fixed rounded-2xl p-5 sm:p-6 border border-outline-variant/30 text-on-tertiary-fixed flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm sm:text-base font-bold leading-tight">
                    In acute tooth pain right now?
                  </h4>
                  <p className="text-xs text-on-tertiary-fixed-variant mt-1 leading-normal">
                    Don't wait through the night. Call our on-duty triage specialist.
                  </p>
                </div>
                <a
                  href="tel:+918049210088"
                  className="bg-on-tertiary-fixed text-tertiary-fixed hover:opacity-90 px-4 py-2.5 rounded-full text-xs sm:text-sm shrink-0 font-bold flex items-center gap-1.5 transition-opacity"
                  aria-label="Call emergency dental hotline"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);
