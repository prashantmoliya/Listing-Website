export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color?: string;
  count?: string | null;
}

export interface ReviewItem {
  id: string;
  name: string;
  date: string;
  rating: number;
  comment: string;
}

export interface BusinessHourItem {
  day: string;
  hours: string;
  isClosed?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ListingItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  rating: number;
  reviewsCount: number;
  views?: number;
  verified: boolean;
  featured: boolean;
  isNew?: boolean;
  address: string;
  city: string;
  phone: string;
  website?: string;
  image: string;
  description: string;
  tags: string[];
  // Extended details
  logo?: string;
  email?: string;
  whatsapp?: string;
  established?: string;
  employees?: string;
  listedDate?: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  gallery?: string[];
  businessHours?: BusinessHourItem[];
  reviews?: ReviewItem[];
  faqs?: FAQItem[];
}

export interface CityItem {
  id: string;
  name: string;
  slug: string;
  emoji: string;
  listingsCount?: string;
}

export interface FeatureItem {
  icon: string;
  title: string;
  desc: string;
  color: string;
  bg: string;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Listings" },
  { href: "/categories", label: "Categories" },
  { href: "/featured", label: "Featured" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const popularSearches = [
  "Restaurants",
  "Doctors",
  "Hotels",
  "IT Services",
  "Coaching",
  "Real Estate",
  "Gyms",
];

export const statsCounters = [
  { display: "280+", label: "Businesses Listed" },
  { display: "500+", label: "Cities Covered" },
  { display: "25+", label: "Business Categories" },
  { display: "1K+", label: "Monthly Visitors" },
];

export const featuresList: FeatureItem[] = [
  {
    icon: "TrendingUp",
    title: "Improve Online Presence",
    desc: "Get found by more customers online",
    color: "text-amber-500",
    bg: "bg-amber-100",
  },
  {
    icon: "Search",
    title: "Increase Google Ranking",
    desc: "Boost your visibility on search engines",
    color: "text-blue-500",
    bg: "bg-blue-100",
  },
  {
    icon: "Link2",
    title: "Do-Follow Featured Link",
    desc: "High quality do-follow link for better SEO",
    color: "text-indigo-500",
    bg: "bg-indigo-100",
  },
  {
    icon: "SearchCode",
    title: "SEO Friendly & Optimized",
    desc: "SEO friendly profile for better ranking",
    color: "text-purple-500",
    bg: "bg-purple-100",
  },
  {
    icon: "Rocket",
    title: "Grow Fast",
    desc: "Reach more leads and grow your business faster",
    color: "text-red-500",
    bg: "bg-red-100",
  },
  {
    icon: "Users",
    title: "More Exposure",
    desc: "Get exposure across multiple categories and locations",
    color: "text-emerald-500",
    bg: "bg-emerald-100",
  },
  {
    icon: "ShieldCheck",
    title: "Trusted Platform",
    desc: "Join thousands of verified businesses across India",
    color: "text-cyan-500",
    bg: "bg-cyan-100",
  },
  {
    icon: "Sparkles",
    title: "Free Featured Listing",
    desc: "Featured listing worth ₹200 is absolutely FREE now!",
    color: "text-fuchsia-500",
    bg: "bg-fuchsia-100",
  },
];

export const categoriesList: CategoryItem[] = [
  { id: "cat-1", name: "Business & Services", slug: "business-services", icon: "💼", color: "#6366f1", count: "1,240+" },
  { id: "cat-2", name: "Health & Beauty", slug: "health-beauty", icon: "💊", color: "#ec4899", count: "890+" },
  { id: "cat-3", name: "Hotels & Restaurants", slug: "hotels-restaurants", icon: "🏨", color: "#f59e0b", count: "1,450+" },
  { id: "cat-4", name: "Shopping", slug: "shopping", icon: "🛍️", color: "#10b981", count: "620+" },
  { id: "cat-5", name: "Education", slug: "education", icon: "🎓", color: "#3b82f6", count: "780+" },
  { id: "cat-6", name: "Real Estate", slug: "real-estate", icon: "🏠", color: "#8b5cf6", count: "980+" },
  { id: "cat-7", name: "Travel & Tourism", slug: "travel-tourism", icon: "✈️", color: "#06b6d4", count: "540+" },
  { id: "cat-8", name: "Technology & IT", slug: "technology-it", icon: "💻", color: "#64748b", count: "1,120+" },
  { id: "cat-9", name: "Automotive", slug: "automotive", icon: "🚗", color: "#f97316", count: "430+" },
  { id: "cat-10", name: "Legal & Finance", slug: "legal-finance", icon: "⚖️", color: "#a78bfa", count: "390+" },
  { id: "cat-11", name: "Events & Entertainment", slug: "events-entertainment", icon: "🎉", color: "#f43f5e", count: "480+" },
  { id: "cat-12", name: "Home & Garden", slug: "home-garden", icon: "🌿", color: "#22c55e", count: "510+" },
  { id: "cat-13", name: "Clothing & Fashion", slug: "clothing-fashion", icon: "👗", color: "#e879f9", count: "670+" },
  { id: "cat-14", name: "Advertising & Marketing", slug: "advertising-marketing", icon: "📢", color: "#fb923c", count: "350+" },
  { id: "cat-15", name: "Sports & Fitness", slug: "sports-fitness", icon: "💪", color: "#34d399", count: "590+" },
  { id: "cat-16", name: "Pet Services", slug: "pet-services", icon: "🐾", color: "#fbbf24", count: "240+" },
  { id: "cat-17", name: "Construction", slug: "construction", icon: "🏗️", color: "#d97706", count: "420+" },
  { id: "cat-18", name: "Logistics", slug: "logistics", icon: "🚚", color: "#3f6212", count: "310+" },
  { id: "cat-19", name: "Media & Press", slug: "media-press", icon: "📰", color: "#1d4ed8", count: "190+" },
  { id: "cat-20", name: "Arts & Crafts", slug: "arts-crafts", icon: "🎨", color: "#be185d", count: "270+" },
  { id: "cat-21", name: "Photography", slug: "photography", icon: "📸", color: "#4338ca", count: "380+" },
  { id: "cat-22", name: "NGOs & Charities", slug: "ngos-charities", icon: "🤝", color: "#047857", count: "210+" },
  { id: "cat-23", name: "Agriculture", slug: "agriculture", icon: "🌾", color: "#65a30d", count: "290+" },
  { id: "cat-24", name: "Manufacturing", slug: "manufacturing", icon: "🏭", color: "#71717a", count: "460+" },
  { id: "cat-25", name: "Security Services", slug: "security-services", icon: "🛡️", color: "#0f172a", count: "180+" },
  { id: "cat-26", name: "Cleaning Services", slug: "cleaning-services", icon: "🧹", color: "#0284c7", count: "530+" },
  { id: "cat-27", name: "Catering", slug: "catering", icon: "🍲", color: "#f59e0b", count: "410+" },
  { id: "cat-28", name: "Plumbing", slug: "plumbing", icon: "🚰", color: "#2563eb", count: "470+" },
  { id: "cat-29", name: "Electricians", slug: "electricians", icon: "⚡", color: "#eab308", count: "520+" },
  { id: "cat-30", name: "Carpentry", slug: "carpentry", icon: "🪚", color: "#9a3412", count: "330+" },
  { id: "cat-31", name: "Salons & Spas", slug: "salons-spas", icon: "💆‍♀️", color: "#f472b6", count: "820+" },
  { id: "cat-32", name: "Consulting", slug: "consulting", icon: "🗣️", color: "#4b5563", count: "640+" },
];

export const citiesList: CityItem[] = [
  { id: "c-1", name: "Mumbai", slug: "mumbai", emoji: "🌆", listingsCount: "4.8k+" },
  { id: "c-2", name: "Delhi", slug: "new-delhi", emoji: "🕌", listingsCount: "5.2k+" },
  { id: "c-3", name: "Bangalore", slug: "bengaluru", emoji: "🌿", listingsCount: "4.1k+" },
  { id: "c-4", name: "Hyderabad", slug: "hyderabad", emoji: "🏰", listingsCount: "3.6k+" },
  { id: "c-5", name: "Chennai", slug: "chennai", emoji: "🌊", listingsCount: "2.9k+" },
  { id: "c-6", name: "Kolkata", slug: "kolkata", emoji: "🌉", listingsCount: "2.7k+" },
  { id: "c-7", name: "Pune", slug: "pune", emoji: "🎭", listingsCount: "3.2k+" },
  { id: "c-8", name: "Ahmedabad", slug: "ahmedabad", emoji: "🏭", listingsCount: "2.5k+" },
  { id: "c-9", name: "Jaipur", slug: "jaipur", emoji: "🏯", listingsCount: "2.1k+" },
  { id: "c-10", name: "Surat", slug: "surat", emoji: "💎", listingsCount: "1.9k+" },
  { id: "c-11", name: "Lucknow", slug: "lucknow", emoji: "🏛️", listingsCount: "1.8k+" },
  { id: "c-12", name: "Kanpur", slug: "kanpur", emoji: "🏢", listingsCount: "1.4k+" },
  { id: "c-13", name: "Nagpur", slug: "nagpur", emoji: "🍊", listingsCount: "1.3k+" },
  { id: "c-14", name: "Indore", slug: "indore", emoji: "🧹", listingsCount: "1.6k+" },
  { id: "c-15", name: "Bhopal", slug: "bhopal", emoji: "🏞️", listingsCount: "1.2k+" },
  { id: "c-16", name: "Patna", slug: "patna", emoji: "🛕", listingsCount: "1.1k+" },
  { id: "c-17", name: "Vadodara", slug: "vadodara", emoji: "🏛️", listingsCount: "1.0k+" },
  { id: "c-18", name: "Ghaziabad", slug: "ghaziabad", emoji: "🏗️", listingsCount: "950+" },
  { id: "c-19", name: "Ludhiana", slug: "ludhiana", emoji: "🚜", listingsCount: "880+" },
  { id: "c-20", name: "Agra", slug: "agra", emoji: "🕌", listingsCount: "1.2k+" },
  { id: "c-21", name: "Nashik", slug: "nashik", emoji: "🍇", listingsCount: "750+" },
  { id: "c-22", name: "Faridabad", slug: "faridabad", emoji: "🏭", listingsCount: "820+" },
  { id: "c-23", name: "Meerut", slug: "meerut", emoji: "⚔️", listingsCount: "690+" },
  { id: "c-24", name: "Rajkot", slug: "rajkot", emoji: "⚙️", listingsCount: "740+" },
];

export const popularTags = [
  { id: "t1", name: "Best Restaurants in Delhi", slug: "best-restaurants-delhi" },
  { id: "t2", name: "Top IT Companies in Bangalore", slug: "top-it-companies-bangalore" },
  { id: "t3", name: "Budget Hotels Mumbai", slug: "budget-hotels-mumbai" },
  { id: "t4", name: "Coaching Centers Kota", slug: "coaching-centers-kota" },
  { id: "t5", name: "Real Estate Agents Hyderabad", slug: "real-estate-hyderabad" },
  { id: "t6", name: "Doctors in Chennai", slug: "doctors-chennai" },
  { id: "t7", name: "Car Repair Services Pune", slug: "car-repair-pune" },
  { id: "t8", name: "Lawyers in Ahmedabad", slug: "lawyers-ahmedabad" },
  { id: "t9", name: "Gyms & Crossfit Kolkata", slug: "gyms-crossfit-kolkata" },
  { id: "t10", name: "Spa & Salon Jaipur", slug: "spa-salon-jaipur" },
  { id: "t11", name: "Packers and Movers Surat", slug: "packers-movers-surat" },
  { id: "t12", name: "Interior Designers Lucknow", slug: "interior-designers-lucknow" },
];

export const marqueeCategories = [
  { label: "Restaurants", href: "/listings?category=hotels-restaurants" },
  { label: "IT Companies", href: "/listings?category=technology-it" },
  { label: "Hotels", href: "/listings?category=hotels-restaurants" },
  { label: "Coaching Centers", href: "/listings?category=education" },
  { label: "Doctors & Clinics", href: "/listings?category=health-beauty" },
  { label: "Real Estate", href: "/listings?category=real-estate" },
  { label: "Car Dealers", href: "/listings?category=automotive" },
  { label: "Lawyers", href: "/listings?category=legal-finance" },
  { label: "Gyms & Fitness", href: "/listings?category=sports-fitness" },
  { label: "Fashion & Clothing", href: "/listings?category=clothing-fashion" },
];

export const featuredListings: ListingItem[] = [
  {
    id: "l-1",
    name: "TechMatrix Software Solutions Pvt Ltd",
    slug: "techmatrix-software-solutions",
    category: "Technology & IT",
    categorySlug: "technology-it",
    rating: 4.9,
    reviewsCount: 142,
    views: 1420,
    verified: true,
    featured: true,
    address: "Electronic City Phase 1, Hosur Road",
    city: "Bangalore",
    phone: "+91 80456 78901",
    website: "https://techmatrix.example.com",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop&q=80",
    description: "Leading enterprise web and mobile app development company providing custom software, cloud architecture, and AI engineering services across India.",
    tags: ["Web Development", "Cloud Solutions", "Mobile Apps"],
  },
  {
    id: "l-2",
    name: "Grand Royal Spice Restaurant & Banquets",
    slug: "grand-royal-spice",
    category: "Hotels & Restaurants",
    categorySlug: "hotels-restaurants",
    rating: 4.8,
    reviewsCount: 326,
    views: 3250,
    verified: true,
    featured: true,
    address: "Connaught Circus, Inner Circle",
    city: "Delhi",
    phone: "+91 11234 56789",
    website: "https://royalspice.example.com",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop&q=80",
    description: "Authentic North Indian & Mughlai fine dining destination. Luxury banquets available for corporate dinners, birthdays, and wedding receptions.",
    tags: ["Fine Dining", "North Indian", "Banquets"],
  },
  {
    id: "l-3",
    name: "Apex Multi-Speciality Dental & Health Clinic",
    slug: "apex-dental-clinic",
    category: "Health & Beauty",
    categorySlug: "health-beauty",
    rating: 5.0,
    reviewsCount: 89,
    views: 980,
    verified: true,
    featured: true,
    address: "Linking Road, Bandra West",
    city: "Mumbai",
    phone: "+91 22987 65432",
    website: "https://apexdental.example.com",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&auto=format&fit=crop&q=80",
    description: "State of the art dental care with painless implants, laser teeth whitening, orthodontic aligners, and family cosmetic dental treatments.",
    tags: ["Dental Implants", "Orthodontics", "Cosmetic"],
  },
  {
    id: "l-4",
    name: "Horizon Real Estate & Property Consultants",
    slug: "horizon-real-estate",
    category: "Real Estate",
    categorySlug: "real-estate",
    rating: 4.7,
    reviewsCount: 215,
    views: 2100,
    verified: true,
    featured: true,
    address: "HITEC City, Madhapur",
    city: "Hyderabad",
    phone: "+91 40678 91234",
    website: "https://horizonproperties.example.com",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80",
    description: "Verified residential and commercial property advisory in Hyderabad. RERA-approved luxury villas, 2/3 BHK apartments, and commercial office spaces.",
    tags: ["Luxury Villas", "Commercial", "RERA Approved"],
  },
];

export const recentListings: ListingItem[] = [
  {
    id: "r-1",
    name: "Urban Style Hair & Beauty Salon",
    slug: "urban-style-salon",
    category: "Health & Beauty",
    categorySlug: "health-beauty",
    rating: 4.6,
    reviewsCount: 45,
    views: 450,
    verified: true,
    featured: false,
    isNew: true,
    address: "FC Road, Shivajinagar",
    city: "Pune",
    phone: "+91 20234 56781",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&auto=format&fit=crop&q=80",
    description: "Modern hair styling, bridal makeup, organic facials, hair spa, and professional grooming studio in Pune.",
    tags: ["Hair Spa", "Bridal Makeup", "Grooming"],
  },
  {
    id: "r-2",
    name: "Pinnacle IIT-JEE & NEET Coaching Academy",
    slug: "pinnacle-coaching-academy",
    category: "Education",
    categorySlug: "education",
    rating: 4.9,
    reviewsCount: 178,
    views: 1850,
    verified: true,
    featured: false,
    isNew: true,
    address: "Indrapuri, C-Scheme",
    city: "Jaipur",
    phone: "+91 14123 45678",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=80",
    description: "Premier coaching institute for engineering & medical entrance exams with top faculty, test series, and study material.",
    tags: ["IIT-JEE", "NEET", "Board Prep"],
  },
  {
    id: "r-3",
    name: "Speedy Movers & Logistics Packers",
    slug: "speedy-movers-logistics",
    category: "Logistics",
    categorySlug: "logistics",
    rating: 4.7,
    reviewsCount: 92,
    views: 730,
    verified: true,
    featured: false,
    isNew: true,
    address: "SG Highway, Prahlad Nagar",
    city: "Ahmedabad",
    phone: "+91 79234 56789",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80",
    description: "Reliable household relocation, office shifting, vehicle transport, and safe warehouse storage with all-India coverage.",
    tags: ["Relocation", "Shifting", "Warehousing"],
  },
  {
    id: "r-4",
    name: "Green Valley Resort & Eco Park",
    slug: "green-valley-resort",
    category: "Travel & Tourism",
    categorySlug: "travel-tourism",
    rating: 4.8,
    reviewsCount: 160,
    views: 1620,
    verified: true,
    featured: false,
    isNew: true,
    address: "Old Madras Road, Whitefield",
    city: "Bangalore",
    phone: "+91 80345 67890",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80",
    description: "Peaceful nature weekend getaway resort with swimming pool, adventure sports, organic dining, and cottages.",
    tags: ["Weekend Getaway", "Eco Resort", "Pool"],
  },
];

export const kryptonEducationListing: ListingItem = {
  id: "krypton-education-indore",
  name: "Krypton Education",
  slug: "krypton-education-indore",
  category: "Education",
  categorySlug: "education",
  rating: 5.0,
  reviewsCount: 12,
  views: 273,
  verified: true,
  featured: true,
  address: "4nd Floor, Shreevardhan Complex, RNT Marg, , Indore, Madhya Pradesh - 452001",
  city: "Indore",
  phone: "+919575933658",
  whatsapp: "+919575933658",
  email: "kryptonedu@gmail.com",
  website: "https://kryptoneducation.com",
  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&auto=format&fit=crop&q=80",
  description: "Krypton Education, Indore is a dedicated finance education institute offering comprehensive coaching for CFA Levels I, II, and III, helping students and aspiring finance professionals build strong foundations for successful careers in global finance. Located at RNT Marg, Indore, the institute focuses on conceptual clarity, exam-oriented preparation, practical understanding, and consistent student support.\n\nUnder the mentorship of Vishal Ramchandani, CFA, an experienced finance educator with over 17 years of teaching experience, Krypton Education brings extensive expertise across CFA, CA, and CS education. The institute has helped hundreds of students strengthen their financial knowledge and move closer to their professional goals.\n\nKrypton Education combines structured classroom learning with flexible recorded lectures, comprehensive hard-copy notes, chapter-wise assessments, and mock tests. Its learning approach emphasizes understanding concepts rather than relying solely on memorization, enabling students to develop a stronger grasp of finance and investment-related subjects.\n\nFrom CFA Level I fundamentals to advanced Level II and Level III preparation, students receive guidance designed around systematic learning, regular practice, revision, and exam-focused preparation. With experienced mentorship and a student-centric approach, Krypton Education aims to make CFA preparation more structured, focused, and accessible.",
  tags: ["Education", "Accounting", "Education Services", "Coaching Centers"],
  established: "2020",
  employees: "1-5",
  listedDate: "28/5/2026",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
  businessHours: [
    { day: "Monday", hours: "09:00 - 17:00" },
    { day: "Tuesday", hours: "09:00 - 17:00" },
    { day: "Wednesday", hours: "09:00 - 17:00" },
    { day: "Thursday", hours: "09:00 - 17:00" },
    { day: "Friday", hours: "09:00 - 17:00" },
    { day: "Saturday", hours: "CLOSED", isClosed: true },
    { day: "Sunday", hours: "CLOSED", isClosed: true },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80",
  ],
  reviews: [
    {
      id: "rev-1",
      name: "Latika Tripathi",
      date: "8 September 2026",
      rating: 5,
      comment: "Vishal Sir Lectures is very helpful for concept clearing. I found Krypton Education as one of the best CFA Coaching in Indore",
    },
    {
      id: "rev-2",
      name: "Lalit Panday",
      date: "6 September 2026",
      rating: 5,
      comment: "Excellent CFA coaching in Indore. Highly recommended!",
    },
    {
      id: "rev-3",
      name: "Trisha Tripathi",
      date: "4 September 2026",
      rating: 5,
      comment: "I'm happy with the classes and overall guidance. Good choice for CFA coaching.",
    },
    {
      id: "rev-4",
      name: "Gouri Nathik",
      date: "30 August 2026",
      rating: 5,
      comment: "Good online classes and clear explanations.",
    },
    {
      id: "rev-5",
      name: "Vishal Ramchandani",
      date: "24 August 2026",
      rating: 5,
      comment: "Best CFA Online Classes with recorded lectures.",
    },
    {
      id: "rev-6",
      name: "Priya Sharma",
      date: "18 August 2026",
      rating: 5,
      comment: "The study material and test series are well-structured and up to date with the latest CFA curriculum.",
    },
    {
      id: "rev-7",
      name: "Rahul Verma",
      date: "10 August 2026",
      rating: 5,
      comment: "Doubt solving sessions are prompt and Vishal sir personally guides students through complex numericals.",
    },
    {
      id: "rev-8",
      name: "Ananya Mehta",
      date: "2 August 2026",
      rating: 5,
      comment: "Cleared my CFA Level 1 in the first attempt thanks to the structured mock exams and revision notes.",
    },
    {
      id: "rev-9",
      name: "Rohan Joshi",
      date: "22 July 2026",
      rating: 5,
      comment: "Superb conceptual clarity on financial reporting and portfolio management modules.",
    },
    {
      id: "rev-10",
      name: "Sneha Patel",
      date: "15 July 2026",
      rating: 5,
      comment: "Highly recommend Krypton Education to anyone serious about clearing CFA in Madhya Pradesh.",
    },
    {
      id: "rev-11",
      name: "Aditya Kulkarni",
      date: "5 July 2026",
      rating: 5,
      comment: "Both offline batches in Indore and recorded lecture access are top-notch.",
    },
    {
      id: "rev-12",
      name: "Neha Agrawal",
      date: "28 June 2026",
      rating: 5,
      comment: "The personalized mentorship and exam strategies made all the difference in my preparation.",
    },
  ],
  faqs: [
    {
      question: "What is Krypton Education?",
      answer: "Krypton Education is a premier finance education institute based in Indore, specializing in comprehensive coaching for CFA (Chartered Financial Analyst) Levels I, II, and III.",
    },
    {
      question: "Where is Krypton Education located?",
      answer: "Krypton Education is located at 4nd Floor, Shreevardhan Complex, RNT Marg, Indore, Madhya Pradesh - 452001.",
    },
    {
      question: "How can I contact Krypton Education?",
      answer: "You can reach Krypton Education by calling +91 9575933658, emailing kryptonedu@gmail.com, or visiting their official website at https://kryptoneducation.com.",
    },
    {
      question: "What are the working hours of Krypton Education?",
      answer: "Krypton Education is open Monday to Friday from 09:00 AM to 05:00 PM. The institute remains closed on Saturdays and Sundays.",
    },
    {
      question: "Does Krypton Education have a website?",
      answer: "Yes, you can visit their official portal at https://kryptoneducation.com for course details, batch schedules, and fee structures.",
    },
    {
      question: "When was Krypton Education established?",
      answer: "Krypton Education was established in the year 2020.",
    },
    {
      question: "Can I message Krypton Education on WhatsApp?",
      answer: "Yes, WhatsApp support is available on +91 9575933658 for admissions and student queries.",
    },
    {
      question: "Is Krypton Education a verified business?",
      answer: "Yes, Krypton Education is a 100% verified and featured educational institute on IndianListingBucket.",
    },
    {
      question: "What categories does Krypton Education operate in?",
      answer: "Krypton Education operates under Education, Accounting, Education Services, and Coaching Centers.",
    },
    {
      question: "Does Krypton Education have good reviews?",
      answer: "Yes, Krypton Education holds a pristine 5.0 out of 5.0 rating with 12 positive student reviews praising the mentorship of Vishal Ramchandani, CFA.",
    },
  ],
};

export const allListings: ListingItem[] = [
  kryptonEducationListing,
  ...featuredListings,
  ...recentListings,
  {
    id: "l-5",
    name: "Royal Heritage Jewellers & Diamond Solitaires",
    slug: "royal-heritage-jewellers",
    category: "Shopping",
    categorySlug: "shopping",
    rating: 4.9,
    reviewsCount: 310,
    views: 2450,
    verified: true,
    featured: true,
    address: "Zaveri Bazaar, Kalbadevi",
    city: "Mumbai",
    phone: "+91 22345 67891",
    website: "https://royalheritagejewels.example.com",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&auto=format&fit=crop&q=80",
    description: "Certified Hallmark gold, natural diamond solitaires, bridal polki jewellery, and custom bridal ornaments with transparent buyback policies.",
    tags: ["Diamond Jewellery", "Hallmark Gold", "Bridal Sets"],
  },
  {
    id: "l-6",
    name: "Autocare Elite Multi-Brand Car Service Center",
    slug: "autocare-elite-service",
    category: "Automotive",
    categorySlug: "automotive",
    rating: 4.7,
    reviewsCount: 154,
    views: 1280,
    verified: true,
    featured: false,
    address: "Okhla Industrial Area Phase 2",
    city: "Delhi",
    phone: "+91 11456 78912",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?w=600&auto=format&fit=crop&q=80",
    description: "Full computerized diagnostics, periodic car maintenance, denting, painting, AC service, wheel alignment, and genuine spares.",
    tags: ["Car Service", "Periodic Maintenance", "Denting Painting"],
  },
  {
    id: "l-7",
    name: "LexJuris Advocates & Corporate Legal Advisors",
    slug: "lexjuris-advocates-legal",
    category: "Legal & Finance",
    categorySlug: "legal-finance",
    rating: 4.8,
    reviewsCount: 76,
    views: 890,
    verified: true,
    featured: false,
    address: "Nariman Point, Marine Drive",
    city: "Mumbai",
    phone: "+91 22876 54321",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80",
    description: "High Court & Supreme Court corporate legal counsel, trademark registration, contract drafting, dispute resolution, and GST tax advisory.",
    tags: ["Corporate Law", "Tax Advisory", "Trademark"],
  },
  {
    id: "l-8",
    name: "FitPulse 24/7 Gym & Crossfit Fitness Hub",
    slug: "fitpulse-gym-fitness",
    category: "Sports & Fitness",
    categorySlug: "sports-fitness",
    rating: 4.9,
    reviewsCount: 220,
    views: 2190,
    verified: true,
    featured: true,
    address: "Koramangala 4th Block, 80 Feet Road",
    city: "Bangalore",
    phone: "+91 80987 65432",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop&q=80",
    description: "Premium state-of-the-art gym with imported equipment, certified personal trainers, CrossFit arena, steam rooms, and nutrition counselling.",
    tags: ["CrossFit", "Personal Training", "Cardio Arena"],
  },
  {
    id: "l-9",
    name: "KalaKriti Ethnic Silks & Designer Lehengas",
    slug: "kalakriti-ethnic-silks",
    category: "Clothing & Fashion",
    categorySlug: "clothing-fashion",
    rating: 4.8,
    reviewsCount: 195,
    views: 1740,
    verified: true,
    featured: false,
    address: "Ring Road Textile Market",
    city: "Surat",
    phone: "+91 26123 45678",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600&auto=format&fit=crop&q=80",
    description: "Exclusive pure Banarasi, Kanjeevaram silk sarees, bespoke bridal lehengas, and hand-embroidered party wear direct from weavers.",
    tags: ["Silk Sarees", "Bridal Lehengas", "Ethnic Wear"],
  },
  {
    id: "l-10",
    name: "GrowthWave Digital Marketing & SEO Agency",
    slug: "growthwave-digital-marketing",
    category: "Advertising & Marketing",
    categorySlug: "advertising-marketing",
    rating: 4.9,
    reviewsCount: 112,
    views: 1350,
    verified: true,
    featured: false,
    address: "Viman Nagar, Central Avenue",
    city: "Pune",
    phone: "+91 20876 54321",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    description: "ROI-driven digital marketing, Google PPC advertising, meta ads management, search engine optimization, and lead generation for Indian SMEs.",
    tags: ["Google Ads", "SEO Services", "Performance Marketing"],
  },
  {
    id: "l-11",
    name: "BuildCraft Architects & Luxury Interior Designers",
    slug: "buildcraft-architects-interiors",
    category: "Construction",
    categorySlug: "construction",
    rating: 4.8,
    reviewsCount: 88,
    views: 1120,
    verified: true,
    featured: true,
    address: "Banjara Hills Road No. 12",
    city: "Hyderabad",
    phone: "+91 40789 01234",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=80",
    description: "End-to-end residential interior turnkeys, modular kitchens, 3D architectural rendering, commercial workspace design, and civil renovation.",
    tags: ["Interior Design", "Modular Kitchen", "Turnkey Projects"],
  },
  {
    id: "l-12",
    name: "NatureNook Organic Landscape & Plant Nursery",
    slug: "naturenook-organic-nursery",
    category: "Home & Garden",
    categorySlug: "home-garden",
    rating: 4.7,
    reviewsCount: 64,
    views: 820,
    verified: false,
    featured: false,
    address: "Thaltej Cross Roads, SG Road",
    city: "Ahmedabad",
    phone: "+91 79876 54321",
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&auto=format&fit=crop&q=80",
    description: "Exotic indoor plants, flowering shrubs, terrace garden setup, vertical walls, organic fertilizers, and home gardening consultations.",
    tags: ["Indoor Plants", "Terrace Gardening", "Landscape"],
  },
];

export function getListingBySlug(slug: string): ListingItem | undefined {
  return allListings.find((item) => item.slug === slug);
}
