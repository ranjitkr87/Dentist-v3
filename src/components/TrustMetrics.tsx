import React from 'react';

export const TrustMetrics: React.FC = () => {
  const metrics = [
    {
      value: '15,000+',
      label: 'Happy Families Treated',
      icon: 'diversity_1',
      bgClass: 'bg-primary-fixed text-on-primary-fixed',
    },
    {
      value: '100%',
      label: 'Gentle Pediatric Protocols',
      icon: 'sentiment_satisfied',
      bgClass: 'bg-surface-variant text-primary',
    },
    {
      value: '4.9 ★',
      label: '1,200+ Google Reviews',
      icon: 'star',
      iconFilled: true,
      bgClass: 'bg-tertiary-fixed text-on-tertiary-fixed',
    },
    {
      value: 'Same-Day',
      label: 'Emergency Relief Guarantee',
      icon: 'alarm_on',
      bgClass: 'bg-secondary-fixed text-secondary',
    },
  ];

  return (
    <section className="py-8 sm:py-10 bg-surface-container-lowest border-y border-outline-variant/30" aria-label="Key Clinic Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-surface-container-low/40 hover:bg-surface-container-low/70 transition-colors"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bgClass}`}>
                <span className={`${item.iconFilled ? 'material-symbols-filled' : 'material-symbols-outlined'} text-[22px] sm:text-[24px]`}>
                  {item.icon}
                </span>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-extrabold text-on-surface leading-tight tracking-tight">
                  {item.value}
                </p>
                <p className="text-xs sm:text-sm text-on-surface-variant font-medium mt-0.5">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
