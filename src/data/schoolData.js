import {
  Award,
  BookOpen,
  Bus,
  Dumbbell,
  FlaskConical,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Laptop,
  Library,
  Palette,
  Shield,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react'

export const schoolInformation = {
  name: 'Garden Public School',
  tagline: 'Learn • Grow • Lead',
  badge: 'Admissions Open 2026–27',
  heroTitle: 'Shaping Young Minds For a Brighter Tomorrow',
  description:
    'Garden Public School provides a nurturing, innovative and inspiring learning environment where students develop knowledge, confidence, creativity and strong values.',
  address: '[School Address]',
  phone: '[Phone Number]',
  email: '[School Email]',
  principal: '[Principal Name]',
  whatsappNumber: '[WhatsApp Number]',
}

export const navigationItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Academics', path: '/academics' },
  { label: 'Admissions', path: '/admissions' },
  { label: 'Facilities', path: '/facilities' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
]

export const quickHighlights = [
  { title: 'Excellence in Education', icon: Sparkles },
  { title: 'Modern Learning', icon: Laptop },
  { title: 'Caring Community', icon: HeartHandshake },
]

export const statistics = [
  { value: 1200, suffix: '+', label: 'Students' },
  { value: 60, suffix: '+', label: 'Qualified Teachers' },
  { value: 25, suffix: '+', label: 'Years of Excellence' },
  { value: 30, suffix: '+', label: 'Clubs & Activities' },
  { value: 95, suffix: '%', label: 'Academic Success Rate' },
]

export const whyChooseUs = [
  {
    title: 'Academic Excellence',
    description:
      'A strong curriculum focused on conceptual understanding and continuous improvement.',
    icon: BookOpen,
  },
  {
    title: 'Experienced Teachers',
    description:
      "Highly qualified educators committed to every student's development.",
    icon: Users,
  },
  {
    title: 'Smart Classrooms',
    description: 'Technology-enabled classrooms supporting interactive learning.',
    icon: Laptop,
  },
  {
    title: 'Safe Campus',
    description: 'A secure and caring environment with appropriate safety measures.',
    icon: Shield,
  },
  {
    title: 'Sports & Activities',
    description:
      'Programs that encourage physical fitness, teamwork and creativity.',
    icon: Dumbbell,
  },
  {
    title: 'Value-Based Education',
    description:
      'Teaching responsibility, discipline, respect and leadership.',
    icon: GraduationCap,
  },
]

export const academicPrograms = [
  {
    title: 'Pre-Primary',
    range: 'Nursery - KG',
    description: 'Activity-based early childhood learning with foundational skills.',
    icon: Sparkles,
  },
  {
    title: 'Primary School',
    range: 'Classes I - V',
    description: 'Strong literacy, numeracy and confidence-building curriculum.',
    icon: BookOpen,
  },
  {
    title: 'Middle School',
    range: 'Classes VI - VIII',
    description: 'Inquiry-driven learning with strong conceptual understanding.',
    icon: FlaskConical,
  },
  {
    title: 'Secondary School',
    range: 'Classes IX - X',
    description: 'Academic depth, exam readiness and leadership opportunities.',
    icon: Award,
  },
  {
    title: 'Senior Secondary',
    range: 'Classes XI - XII',
    description: 'Career-focused streams with mentorship and future planning.',
    icon: GraduationCap,
  },
]

export const facilities = [
  {
    title: 'Smart Classrooms',
    description: 'Interactive digital boards and learner-first seating design.',
    image:
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80',
    icon: Laptop,
  },
  {
    title: 'Computer Laboratory',
    description: 'Modern computer systems with supervised practical learning.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
    icon: Laptop,
  },
  {
    title: 'Science Laboratories',
    description: 'Well-equipped Physics, Chemistry and Biology labs.',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
    icon: FlaskConical,
  },
  {
    title: 'Library',
    description: 'A rich collection of books, journals and digital resources.',
    image:
      'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80',
    icon: Library,
  },
  {
    title: 'Sports Ground',
    description: 'Large outdoor areas for athletics and team sports.',
    image:
      'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1200&q=80',
    icon: Dumbbell,
  },
  {
    title: 'Music & Dance Room',
    description: 'Creative studios for performance arts and expression.',
    image:
      'https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?auto=format&fit=crop&w=1200&q=80',
    icon: Palette,
  },
  {
    title: 'Art & Creativity Room',
    description: 'Hands-on spaces for design, drawing and craft.',
    image:
      'https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80',
    icon: Palette,
  },
  {
    title: 'School Transportation',
    description: 'Safe and punctual transportation with trained staff.',
    image:
      'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=1200&q=80',
    icon: Bus,
  },
]

export const studentLife = [
  'Sports',
  'Cultural Activities',
  'Science Exhibitions',
  'Art & Craft',
  'Debate',
  'Music',
  'Educational Tours',
  'Annual Function',
]

export const achievements = [
  {
    title: 'Academic Achievements',
    year: '2026',
    description: 'Students delivered outstanding board and Olympiad performances.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Sports Championships',
    year: '2026',
    description: 'School teams won district-level championships across disciplines.',
    image:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Olympiad Winners',
    year: '2025',
    description: 'Multiple national merit ranks in math and science Olympiads.',
    image:
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Cultural Awards',
    year: '2025',
    description: 'Creative arts and performing teams recognized at regional events.',
    image:
      'https://images.unsplash.com/photo-1503095396549-807759245b35?auto=format&fit=crop&w=1200&q=80',
  },
]

export const events = [
  {
    title: 'Annual Sports Day',
    date: '15 October 2026',
    venue: 'Main Sports Ground',
    description: 'A day of athletics, team spirit and celebration.',
  },
  {
    title: 'Science Exhibition',
    date: '28 October 2026',
    venue: 'Innovation Hall',
    description: 'Student-led demonstrations and project showcases.',
  },
  {
    title: 'Parent-Teacher Meeting',
    date: '10 November 2026',
    venue: 'Academic Block',
    description: 'Progress discussions and collaborative planning.',
  },
  {
    title: 'Annual Cultural Fest',
    date: '20 December 2026',
    venue: 'Auditorium',
    description: 'Music, dance and theatre by talented learners.',
  },
]

export const testimonials = [
  {
    name: 'Parent 1',
    class: 'Class VI',
    rating: 5,
    quote:
      'Garden Public School has provided my child with an excellent balance of academics and extracurricular activities.',
  },
  {
    name: 'Parent 2',
    class: 'Class III',
    rating: 5,
    quote:
      "The teachers are supportive, approachable and genuinely care about every student's progress.",
  },
  {
    name: 'Parent 3',
    class: 'Class IX',
    rating: 5,
    quote: 'The school provides a safe and positive learning environment.',
  },
]

export const galleryImages = [
  { category: 'Campus', src: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80' },
  { category: 'Classroom', src: 'https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=1200&q=80' },
  { category: 'Sports', src: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1200&q=80' },
  { category: 'Events', src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80' },
  { category: 'Cultural Activities', src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80' },
  { category: 'Science Lab', src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80' },
  { category: 'Academics', src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80' },
  { category: 'Activities', src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=1200&q=80' },
]

export const newsUpdates = [
  {
    category: 'School News',
    date: '01 Sep 2026',
    title: 'Inter-house activities begin this month',
    summary: 'Students will participate in a month-long mix of academics and co-curricular events.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Notices',
    date: '28 Aug 2026',
    title: 'Orientation schedule for new admissions',
    summary: 'Orientation sessions for parents and students will be held in the first week of April.',
    image: 'https://images.unsplash.com/photo-1453733190371-0a9bedd82893?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Academic Updates',
    date: '24 Aug 2026',
    title: 'Assessment framework for Term 1 shared',
    summary: 'A balanced rubric covering academics, projects and engagement has been published.',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    category: 'Competition Results',
    date: '18 Aug 2026',
    title: 'Students shine in district quiz challenge',
    summary: 'Our middle school learners secured top positions in the annual inter-school quiz.',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=80',
  },
]

export const footerAcademics = ['Pre-Primary', 'Primary', 'Middle School', 'Secondary', 'Senior Secondary']

export const coreValues = ['Integrity', 'Excellence', 'Respect', 'Creativity', 'Responsibility', 'Leadership']

export const timeline = [
  { year: '2001', event: 'Foundation of Garden Public School' },
  { year: '2008', event: 'Expansion to middle and secondary wings' },
  { year: '2016', event: 'Smart classroom and digital learning integration' },
  { year: '2026', event: 'New innovation labs and admissions expansion' },
]

export const achievementsIcon = Trophy
export const principalMessage =
  'At Garden Public School, education goes beyond textbooks. Our goal is to help every child discover their potential, develop confidence, embrace curiosity and become a responsible citizen.'
export const mapEmbed =
  'https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed'
export const aboutPoints = [
  'Student-Centered Learning',
  'Experienced Faculty',
  'Modern Infrastructure',
  'Safe Learning Environment',
]
export const aboutHighlights = [Landmark, Users, Shield, Laptop]
