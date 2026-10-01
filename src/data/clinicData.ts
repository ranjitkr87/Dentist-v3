import { TreatmentItem, Doctor, Testimonial, FAQItem } from '../types';

export const TREATMENTS_DATA: TreatmentItem[] = [
  {
    id: 'kids-dentistry',
    category: 'kids',
    badge: 'Ages 1 - 14',
    badgeColor: 'bg-emerald-100 text-emerald-800',
    icon: 'toys',
    title: 'Pediatric & Kids Dentistry',
    description: 'Painless cavity prevention, tooth-friendly fluoride varnish, cavity-shielding pit fissure sealants, and sensory-soothing happy gas options for nervous little champions.',
    features: [
      'Cartoon ceiling entertainment',
      'Zero-sugar toy prize box',
      'Habit correction (thumb sucking/tongue thrust)'
    ],
    priceInfo: 'From ₹800 checkup',
    actionText: 'Book Child Slot →'
  },
  {
    id: 'preventive-cleaning',
    category: 'preventive',
    badge: 'All Ages & Families',
    badgeColor: 'bg-sky-100 text-sky-800',
    icon: 'cleaning_services',
    title: 'Family Preventive & Ultrasonic Cleaning',
    description: 'Gentle tartar and stain removal using warm ultrasonic water-flow scaling. Safe for sensitive gums and combined with our high-definition intraoral camera diagnosis.',
    features: [
      'Air-polishing tea/coffee stain removal',
      'Gum bleeding & bad breath relief',
      'Comprehensive 12-point oral health audit'
    ],
    priceInfo: 'From ₹1,200',
    actionText: 'Select Care →'
  },
  {
    id: 'root-canal',
    category: 'endodontics',
    badge: 'Teens & Adults',
    badgeColor: 'bg-amber-100 text-amber-900',
    icon: 'healing',
    title: 'Pain-Free Single-Visit Root Canal',
    description: 'Save deep decay teeth without discomfort. Digital apex locators and computerized rotary instruments ensure precise cleaning in 45 relaxing minutes.',
    features: [
      'Computer-guided painless anesthesia',
      'Natural looking Zirconia crowns',
      '15-year warranty on ceramic crowns'
    ],
    priceInfo: 'From ₹4,500',
    actionText: 'Select Care →'
  },
  {
    id: 'clear-aligners',
    category: 'orthodontics',
    badge: 'Teens & Young Adults',
    badgeColor: 'bg-purple-100 text-purple-800',
    icon: 'auto_fix_high',
    title: 'Clear Aligners & Modern Orthodontics',
    description: 'Nearly invisible, removable teeth straightening without food restrictions or metal wires. See your final smile simulation in 3D prior to treatment start.',
    features: [
      'iTero 3D digital smile scan (No messy goop)',
      'Removable for meals & school photos',
      '0% interest flexible EMI options'
    ],
    priceInfo: 'EMI starts ₹3,999/mo',
    actionText: 'Free 3D Scan →'
  },
  {
    id: 'dental-implants',
    category: 'implants',
    badge: 'Seniors & Adults',
    badgeColor: 'bg-orange-100 text-orange-800',
    icon: 'health_and_safety',
    title: 'Dental Implants & Senior Comfort Care',
    description: 'Restore the joyful pleasure of chewing your favorite solid foods. Precision titanium implants, non-slip dentures, and soft-tissue care for grandparents.',
    features: [
      'German biocompatible titanium fixtures',
      'Flapless, quick-healing keyhole protocol',
      'Senior wheelchair-accessible suites'
    ],
    priceInfo: 'From ₹18,000',
    actionText: 'Book Consult →'
  },
  {
    id: 'emergency-relief',
    category: 'emergency',
    badge: 'Immediate Priority',
    badgeColor: 'bg-red-100 text-red-800',
    icon: 'e911_emergency',
    title: 'Same-Day Emergency Dental Relief',
    description: 'Severe acute toothaches, playground chipped teeth, knocked out crowns, or sudden facial swelling. We keep designated emergency slots open daily.',
    features: [
      'Immediate local pain suppression',
      'Tooth preservation within the golden hour',
      'Zero triage wait times for children in pain'
    ],
    priceInfo: 'Walk-in Slots Open',
    actionText: 'Call Hotline →'
  }
];

export const LEAD_DOCTOR: Doctor = {
  id: 'dr-ananya-sharma',
  name: 'Dr. Ananya Sharma, MDS',
  title: 'Clinical Director',
  experience: '14+ Years Experience',
  specialty: 'Specialist in Preventive & Pediatric Family Dentistry',
  quote: '"My guiding philosophy is that no child or adult should ever dread stepping into a dental clinic. With micro-instruments, transparent discussions, and empathy, we change how entire families experience health."',
  degrees: [
    'MDS Pedodontics (Gold Medalist)',
    'Invisalign® Certified Provider',
    'Member, Indian Society of Pedodontics'
  ],
  image: 'https://lh3.googleusercontent.com/aida/AEtjO1VZc006zIirjYCTVnULTyuBw6Boph9zaHl4w3CfkT7ikOagS2M4cIRXcKDDclJR06ip9nouKg4z1CyjbA9WD-1M8YZLmED6RBT_obuDj3MqOoaRXf-dDdZPyMWWcI1mhsIKak6jdRVFNEruUHYPLjjbLZNUiAlTvPWKwy6IpGVchZn1uMriCacGuaBTxP-thG3IS0flF-YmaNb8zFNWTCtFC-BRHFhbckkt5gBGIELSfQQI3rSM7Q1fD24',
  bio: 'Pioneered zero-anxiety gentle pediatric protocols in Bangalore with over 12,000 satisfied child smile treatments.'
};

export const TEAM_DOCTORS: Doctor[] = [
  {
    id: 'dr-karthik-rao',
    name: 'Dr. Karthik Rao, MDS',
    title: 'Orthodontics & Teen Smile Architect',
    experience: '11+ Years Experience',
    specialty: 'Orthodontics & Dentofacial Orthopedics',
    initials: 'DK',
    accentBg: 'bg-secondary-fixed text-secondary',
    bio: 'Over 1,800 successful smile aligner and self-ligating brace corrections with gentle mechanics.'
  },
  {
    id: 'dr-shalini-menon',
    name: 'Dr. Shalini Menon, MDS',
    title: 'Prosthodontist & Senior Implantologist',
    experience: '12+ Years Experience',
    specialty: 'Prosthodontics, Crown & Bridge',
    initials: 'SM',
    accentBg: 'bg-tertiary-fixed text-tertiary',
    bio: 'Expert in minimally invasive full arch restoration and comfortable precision dentures for elders.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'review-1',
    name: 'Pooja Venkatesh',
    role: 'Mother of 4-yr-old',
    location: 'Indiranagar',
    initials: 'PV',
    rating: 5,
    text: '"My 4-year-old had a severe fall that cracked her front tooth. We rushed to Dr. Ananya in tears. She was so gentle, spoke softly to my daughter, put cartoons on the ceiling screen, and fixed the chip seamlessly. Not a single tear was shed!"'
  },
  {
    id: 'review-2',
    name: 'Suresh Krishnamurthy',
    role: 'Tech Lead',
    location: 'HAL 2nd Stage',
    initials: 'SK',
    rating: 5,
    text: '"I brought my 72-year-old mother for dental implants. The wheelchair accessibility, the polite staff, and the single-visit keyhole surgery procedure were unbelievable. She can finally enjoy her favorite dosas again without discomfort."'
  },
  {
    id: 'review-3',
    name: 'Nandita Mohan',
    role: 'Architect & Parent',
    location: 'Defense Colony',
    initials: 'NM',
    rating: 5,
    text: '"I got clear aligners here while my son had his dental sealants done. Having both treated under one roof with such kind doctors saved our weekends. Transparent quotes with zero surprise fees."'
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'When should my child visit the dentist for the first time?',
    answer: "The Indian & Global Pediatric Dental Associations recommend a child's first visit by their first birthday or within 6 months of their first milk tooth erupting. This early visit is completely gentle, focusing on acclimating your baby to the chair, checking jaw alignment, and guiding parents on feeding habits."
  },
  {
    id: 'faq-2',
    question: 'Do you handle unexpected dental emergencies on Saturdays and Sundays?',
    answer: 'Yes! We understand that playground falls, sports injuries, and sudden throbbing toothaches happen on weekends. We remain fully open on Saturdays and Sundays from 9:30 AM to 7:00 PM with dedicated trauma and emergency slots reserved.'
  },
  {
    id: 'faq-3',
    question: 'Are modern root canal treatments truly painless?',
    answer: 'Absolutely. With modern buffered computer-controlled local anesthesia, the procedure is completely sensation-free. In fact, most of our adult patients report feeling immediate soothing relief compared to the severe toothache they arrived with, often taking a quick nap in our padded dental lounge chairs.'
  },
  {
    id: 'faq-4',
    question: 'Can I sit inside the treatment room with my nervous toddler?',
    answer: 'We actively encourage it! Our pediatric treatment rooms are designed with spacious parent lounge seating right beside the dental chair. You can hold your child\'s hand, sing along to the cartoon playing on the ceiling monitor, or simply offer comforting reassurance.'
  }
];

export const CLINIC_SERVICES_OPTIONS = [
  'First Time Kids Dental Exam',
  'Gentle Family Cleaning & Polish',
  'Clear Aligners 3D Scan',
  'Painless Root Canal Consultation',
  'Dental Implants & Replacement',
  'Immediate Toothache Emergency'
];

export const CLINIC_TIMING_OPTIONS = [
  'Morning (10:00 AM - 1:00 PM)',
  'Afternoon (2:00 PM - 5:00 PM)',
  'Evening / After School (5:00 PM - 8:30 PM)',
  'Weekend Priority Slot'
];
