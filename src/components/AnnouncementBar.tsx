import React from 'react';

interface AnnouncementBarProps {
  onClaimClick: () => void;
}

export const AnnouncementBar: React.FC<AnnouncementBarProps> = ({ onClaimClick }) => {
  return (
    <aside aria-label="Announcement" className="bg-primary text-on-primary py-2 px-4 sm:px-6 text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 relative z-50">
      <span className="material-symbols-outlined text-[16px] shrink-0" aria-hidden="true">celebration</span>
      <span className="truncate sm:overflow-visible">
        Welcoming new families in Indiranagar! Get complimentary 3D Digital Cavity Scans for children under 10 this month.
      </span>
      <button
        onClick={onClaimClick}
        className="underline font-bold hover:text-primary-fixed transition-colors ml-1 inline-flex items-center shrink-0 cursor-pointer"
        aria-label="Claim complimentary 3D digital cavity scan"
      >
        Claim Spot →
      </button>
    </aside>
  );
};
