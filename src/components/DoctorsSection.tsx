import React from 'react';
import { LEAD_DOCTOR, TEAM_DOCTORS } from '../data/clinicData';

interface DoctorsSectionProps {
  onBookWithDoctor: (doctorName: string) => void;
}

export const DoctorsSection: React.FC<DoctorsSectionProps> = ({ onBookWithDoctor }) => {
  return (
    <section className="py-14 sm:py-20 md:py-24 bg-surface" id="our-doctors" aria-label="Our Dental Doctors and Specialists">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-widest text-primary font-bold bg-surface-container-high px-3.5 py-1.5 rounded-full inline-block">
            Compassionate Clinical Leads
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-on-surface mt-3 tracking-tight">
            Gentle Hands Backed by Academic Rigor
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-2.5 leading-relaxed">
            Our specialists aren't just celebrated clinicians—they are parents and patient advocates who treat your family like their own.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Doctor Lead Feature Card */}
          <div className="lg:col-span-8 bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-outline-variant/30 custom-diffuse-shadow">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5">
                <img
                  src={LEAD_DOCTOR.image}
                  alt="Warm portrait of Dr. Ananya Sharma MDS smiling in teal dental scrubs in an ultra-modern clean clinic suite"
                  className="w-full h-72 sm:h-80 object-cover rounded-xl shadow-md"
                  loading="lazy"
                  width={350}
                  height={400}
                />
              </div>

              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed text-xs font-bold">
                      {LEAD_DOCTOR.title}
                    </span>
                    <span className="text-on-surface-variant text-xs font-semibold">
                      {LEAD_DOCTOR.experience}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-on-surface">
                    {LEAD_DOCTOR.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-primary font-semibold mt-0.5">
                    {LEAD_DOCTOR.specialty}
                  </p>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-3 italic leading-relaxed">
                    {LEAD_DOCTOR.quote}
                  </p>
                </div>

                {/* Badges / Degrees */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-outline-variant/20">
                  {LEAD_DOCTOR.degrees?.map((degree, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-surface-container-low text-on-surface text-xs font-semibold">
                      {degree}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onBookWithDoctor(LEAD_DOCTOR.name)}
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm hover:shadow cursor-pointer"
                  >
                    <span>Book Consultation with Dr. Sharma</span>
                    <span className="material-symbols-outlined text-[18px]">calendar_add_on</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Auxiliary Team Highlights */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            {TEAM_DOCTORS.map((doc) => (
              <div
                key={doc.id}
                className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/30 custom-diffuse-shadow hover:border-primary/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${doc.accentBg}`}>
                    {doc.initials}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-on-surface">{doc.name}</h4>
                    <p className="text-xs text-primary font-medium">{doc.title}</p>
                  </div>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">
                  {doc.bio}
                </p>
                <div className="mt-3 pt-2 border-t border-outline-variant/20 flex justify-end">
                  <button
                    onClick={() => onBookWithDoctor(doc.name)}
                    className="text-xs font-bold text-primary hover:underline cursor-pointer"
                  >
                    Request Slot →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
