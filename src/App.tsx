import React, { useState, useRef } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustMetrics } from './components/TrustMetrics';
import { TreatmentsGrid } from './components/TreatmentsGrid';
import { ClinicTour } from './components/ClinicTour';
import { DoctorsSection } from './components/DoctorsSection';
import { VisitJourney } from './components/VisitJourney';
import { BookingSection } from './components/BookingSection';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ClaimScanModal } from './components/ClaimScanModal';

export default function App() {
  const [isClaimModalOpen, setIsClaimModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('First Time Kids Dental Exam');
  const [selectedDoctor, setSelectedDoctor] = useState<string>('');
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = (serviceName?: string, doctorName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    if (doctorName) {
      setSelectedDoctor(doctorName);
    }
    if (bookingRef.current) {
      bookingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const el = document.getElementById('booking-card');
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectTreatment = (treatmentTitle: string) => {
    // Map treatment titles to booking options
    let service = 'First Time Kids Dental Exam';
    if (treatmentTitle.includes('Kids')) {
      service = 'First Time Kids Dental Exam';
    } else if (treatmentTitle.includes('Preventive') || treatmentTitle.includes('Cleaning')) {
      service = 'Gentle Family Cleaning & Polish';
    } else if (treatmentTitle.includes('Aligners') || treatmentTitle.includes('Orthodontics')) {
      service = 'Clear Aligners 3D Scan';
    } else if (treatmentTitle.includes('Root Canal')) {
      service = 'Painless Root Canal Consultation';
    } else if (treatmentTitle.includes('Implants')) {
      service = 'Dental Implants & Replacement';
    } else if (treatmentTitle.includes('Emergency')) {
      service = 'Immediate Toothache Emergency';
    }
    scrollToBooking(service);
  };

  const handleBookWithDoctor = (doctorName: string) => {
    let service = 'First Time Kids Dental Exam';
    if (doctorName.includes('Karthik Rao')) {
      service = 'Clear Aligners 3D Scan';
    } else if (doctorName.includes('Shalini Menon')) {
      service = 'Dental Implants & Replacement';
    }
    scrollToBooking(service, doctorName);
  };

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col font-sans selection:bg-primary-fixed-dim selection:text-on-surface">
      {/* Skip to Main Content Link for WCAG Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-on-primary focus:rounded-lg focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Announcement Notification Banner */}
      <AnnouncementBar onClaimClick={() => setIsClaimModalOpen(true)} />

      {/* Sticky Navigation Header */}
      <Navbar onBookClick={() => scrollToBooking()} />

      {/* Main Semantic Landmark */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <Hero onBookClick={() => scrollToBooking()} />

        {/* Friendly Trust Indicators Metrics */}
        <TrustMetrics />

        {/* Comprehensive Family Dental Services Grid */}
        <TreatmentsGrid onSelectTreatment={handleSelectTreatment} />

        {/* Friendly Zero-Anxiety Experience & Clinic Tour */}
        <ClinicTour onBookClick={() => scrollToBooking()} />

        {/* Meet the Caring Dental Team Section */}
        <DoctorsSection onBookWithDoctor={handleBookWithDoctor} />

        {/* 5-Step Anxiety-Free Patient Journey */}
        <VisitJourney />

        {/* Interactive Family Appointment Booking & Pricing Estimate Section */}
        <BookingSection
          ref={bookingRef}
          initialService={selectedService}
          initialDoctor={selectedDoctor}
        />

        {/* Real Family Testimonials & Reviews */}
        <Testimonials />

        {/* Practical Parent FAQ Accordion Section */}
        <FAQSection />

        {/* Clinic Timings, Location & Map Card Section */}
        <LocationSection onBookClick={() => scrollToBooking()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Free 3D Cavity Scan Claim Modal */}
      <ClaimScanModal
        isOpen={isClaimModalOpen}
        onClose={() => setIsClaimModalOpen(false)}
      />
    </div>
  );
}
