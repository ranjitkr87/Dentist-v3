export interface TreatmentItem {
  id: string;
  category: 'kids' | 'preventive' | 'endodontics' | 'orthodontics' | 'implants' | 'emergency';
  badge: string;
  badgeColor: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  priceInfo: string;
  actionText: string;
}

export interface Doctor {
  id: string;
  name: string;
  title: string;
  experience: string;
  specialty: string;
  quote?: string;
  degrees?: string[];
  image?: string;
  initials?: string;
  accentBg?: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  initials: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BookingFormState {
  visitType: 'child' | 'adult' | 'senior';
  fullName: string;
  phone: string;
  service: string;
  timing: string;
  notes: string;
}
