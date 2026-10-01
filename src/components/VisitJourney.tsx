import React from 'react';

export const VisitJourney: React.FC = () => {
  const steps = [
    {
      number: '01',
      icon: 'calendar_month',
      title: 'Quick Slot Booking',
      desc: 'Pick a convenient weekend or post-school evening time in under 60 seconds.',
    },
    {
      number: '02',
      icon: 'park',
      title: 'Lobby Play Sanctuary',
      desc: 'Arrive to wooden toys, picture books, herbal teas, and a calm, non-hospital feel.',
    },
    {
      number: '03',
      icon: 'search_check',
      title: 'Gentle Checkup',
      desc: 'Digital camera scan where you see what the doctor sees on a sunny high-res monitor.',
    },
    {
      number: '04',
      icon: 'receipt',
      title: 'Clear Upfront Plan',
      desc: 'Transparent written quotes. Zero surprise line items or pressured procedures.',
    },
    {
      number: '05',
      icon: 'sentiment_very_satisfied',
      title: 'Happy Smiles & Rewards',
      desc: 'Prize chest toy pick for kids, aftercare guidance, and warm WhatsApp follow-up.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 md:py-24 bg-surface-container-low/30 border-y border-outline-variant/20" id="patient-journey" aria-label="Patient Journey 5 Steps">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-surface-container-high px-3.5 py-1.5 rounded-full inline-block">
            Effortless Experience
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-on-surface mt-3 tracking-tight">
            Your 5-Step Stress-Free Visit
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-2.5 leading-relaxed">
            We designed our visit flow so children and adults know exactly what to expect at every second.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 relative hover:-translate-y-1 transition-all duration-300 custom-diffuse-shadow flex flex-col justify-between"
            >
              <span className="text-3xl sm:text-4xl font-black text-primary/15 absolute top-3 right-4 select-none">
                {step.number}
              </span>
              <div>
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary mb-3">
                  <span className="material-symbols-outlined text-[20px]">{step.icon}</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-on-surface mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
