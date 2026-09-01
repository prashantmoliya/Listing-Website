export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color?: string;
  count?: string | null;
}

export interface ListingItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  categorySlug: string;
  rating: number;
  reviewsCount: number;
  verified: boolean;
  featured: boolean;
  address: string;
  city: string;
  phone: string;
  website?: string;
  image: string;
  description: string;
  tags: string[];
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
  { label: "Restaurants", href: "/listings?cat=hotels-restaurants" },
  { label: "IT Companies", href: "/listings?cat=technology-it" },
  { label: "Hotels", href: "/listings?cat=hotels-restaurants" },
  { label: "Coaching Centers", href: "/listings?cat=education" },
  { label: "Doctors & Clinics", href: "/listings?cat=health-beauty" },
  { label: "Real Estate", href: "/listings?cat=real-estate" },
  { label: "Car Dealers", href: "/listings?cat=automotive" },
  { label: "Lawyers", href: "/listings?cat=legal-finance" },
  { label: "Gyms & Fitness", href: "/listings?cat=sports-fitness" },
  { label: "Fashion & Clothing", href: "/listings?cat=clothing-fashion" },
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
    verified: true,
    featured: false,
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
    verified: true,
    featured: false,
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
    verified: true,
    featured: false,
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
    verified: true,
    featured: false,
    address: "Old Madras Road, Whitefield",
    city: "Bangalore",
    phone: "+91 80345 67890",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&auto=format&fit=crop&q=80",
    description: "Peaceful nature weekend getaway resort with swimming pool, adventure sports, organic dining, and cottages.",
    tags: ["Weekend Getaway", "Eco Resort", "Pool"],
  },
];
