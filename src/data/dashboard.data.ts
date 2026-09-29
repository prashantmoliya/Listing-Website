export interface UserListingItem {
  id: string;
  name: string;
  category: string;
  city: string;
  address: string;
  phone: string;
  status: "Approved" | "Pending" | "Rejected";
  isActive?: boolean;
  plan?: "Free" | "Featured";
  views: number;
  rating: number;
  reviewsCount: number;
  image: string;
  established: string;
  listedDate: string;
  rejectionReason?: string;
}

export interface ReceivedReviewItem {
  id: string;
  author: string;
  avatar: string;
  listingId: string;
  listingName: string;
  rating: number;
  date: string;
  comment: string;
  reply?: string;
  replyDate?: string;
}

export interface GivenReviewItem {
  id: string;
  businessName: string;
  businessCategory: string;
  businessCity: string;
  businessSlug: string;
  rating: number;
  date: string;
  comment: string;
}

export const initialUserListings: UserListingItem[] = [
  {
    id: "lst-1",
    name: "Royal Palace Heritage Hotel & Resort",
    category: "Hotels & Travel",
    city: "Jaipur, Rajasthan",
    address: "Palace Road, Near City Palace, Jaipur",
    phone: "+91 98765 43210",
    status: "Approved",
    isActive: true,
    plan: "Featured",
    views: 2450,
    rating: 4.9,
    reviewsCount: 18,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&auto=format&fit=crop&q=60",
    established: "2012",
    listedDate: "12 Jan 2026",
  },
  {
    id: "lst-2",
    name: "Apex Multi-Speciality Clinic & Diagnostic Center",
    category: "Doctors & Health",
    city: "Ahmedabad, Gujarat",
    address: "Commerce Six Roads, Navrangpura, Ahmedabad",
    phone: "+91 98250 12345",
    status: "Approved",
    isActive: true,
    plan: "Free",
    views: 1840,
    rating: 4.8,
    reviewsCount: 12,
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=500&auto=format&fit=crop&q=60",
    established: "2018",
    listedDate: "05 Feb 2026",
  },
  {
    id: "lst-3",
    name: "Saffron Spices Fine Dining Indian Restaurant",
    category: "Restaurants",
    city: "Surat, Gujarat",
    address: "VIP Road, Vesu, Surat",
    phone: "+91 99090 98765",
    status: "Pending",
    plan: "Free",
    views: 530,
    rating: 4.7,
    reviewsCount: 4,
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&auto=format&fit=crop&q=60",
    established: "2021",
    listedDate: "18 Sep 2026",
  },
  {
    id: "lst-4",
    name: "Urban Style Fashion Boutique & Tailors",
    category: "Shopping & Fashion",
    city: "Vadodara, Gujarat",
    address: "Alkapuri Main Road, Vadodara",
    phone: "+91 98980 11223",
    status: "Rejected",
    plan: "Featured",
    rejectionReason: "Business registration document is illegible. Please re-upload a clear copy.",
    views: 120,
    rating: 0,
    reviewsCount: 0,
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&auto=format&fit=crop&q=60",
    established: "2023",
    listedDate: "20 Sep 2026",
  },
];

export const initialReceivedReviews: ReceivedReviewItem[] = [
  {
    id: "rec-1",
    author: "Pooja Patel",
    avatar: "P",
    listingId: "lst-1",
    listingName: "Royal Palace Heritage Hotel & Resort",
    rating: 5,
    date: "22 Sep 2026",
    comment:
      "Fantastic experience! The staff was extremely courteous, rooms were palatial and the traditional Rajasthani dinner at the courtyard was unforgettable. Will definitely visit again with family!",
  },
  {
    id: "rec-2",
    author: "Amit Verma",
    avatar: "A",
    listingId: "lst-2",
    listingName: "Apex Multi-Speciality Clinic & Diagnostic Center",
    rating: 5,
    date: "19 Sep 2026",
    comment:
      "Dr. Rahul Sharma is very professional and patient. The diagnostic lab reports were delivered via WhatsApp within 2 hours. Very clean and hygienic premises.",
    reply:
      "Thank you so much Amit ji for your kind words! We strive to deliver the highest quality care to all our patients.",
    replyDate: "20 Sep 2026",
  },
  {
    id: "rec-3",
    author: "Vikram Malhotra",
    avatar: "V",
    listingId: "lst-1",
    listingName: "Royal Palace Heritage Hotel & Resort",
    rating: 4,
    date: "14 Sep 2026",
    comment:
      "Great heritage ambiance and clean pool. Breakfast spread was delicious. Room service was slightly delayed during peak hours on Sunday morning, otherwise 5 stars.",
  },
  {
    id: "rec-4",
    author: "Neha Singhania",
    avatar: "N",
    listingId: "lst-3",
    listingName: "Saffron Spices Fine Dining Indian Restaurant",
    rating: 5,
    date: "10 Sep 2026",
    comment:
      "Best Dal Makhani and Paneer Tikka in Vesu! Ambiance is perfect for family celebrations. Highly recommend table booking on weekends.",
  },
];

export const initialGivenReviews: GivenReviewItem[] = [
  {
    id: "giv-1",
    businessName: "City Car Care & Multi-Brand Garage",
    businessCategory: "Automobile & Repairs",
    businessCity: "Jaipur, Rajasthan",
    businessSlug: "city-car-care",
    rating: 5,
    date: "15 Aug 2026",
    comment:
      "Got full car detailing and AC service done here. Genuine parts and honest pricing without unexpected add-ons. Owner Ramesh was very helpful.",
  },
  {
    id: "giv-2",
    businessName: "Blue Dart Express Logistics Center",
    businessCategory: "Couriers & Cargo",
    businessCity: "Ahmedabad, Gujarat",
    businessSlug: "blue-dart-express",
    rating: 4,
    date: "02 Jul 2026",
    comment:
      "Prompt parcel pickup and delivery to Mumbai within 24 hours. The tracking updates could be slightly more realtime.",
  },
  {
    id: "giv-3",
    businessName: "Glow & Shine Wellness Spa",
    businessCategory: "Salons & Spa",
    businessCity: "Surat, Gujarat",
    businessSlug: "glow-shine-spa",
    rating: 5,
    date: "18 Jun 2026",
    comment:
      "Very relaxing Swedish massage and aromatherapy session. Clean therapists and calm environment.",
  },
];

export const categoryOptions = [
  "Restaurants & Cafes",
  "Hotels & Travel",
  "Doctors & Health",
  "Real Estate & Property",
  "Education & Coaching",
  "IT & Tech Services",
  "Salons & Spa",
  "Automobile & Garages",
  "Home Services & Repairs",
  "Shopping & Retail",
];

export const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const availableAmenities = [
  "Free Wi-Fi",
  "Air Conditioned",
  "Card Payment Accepted",
  "UPI / QR Payment",
  "Parking Available",
  "Wheelchair Accessible",
  "Home Delivery",
  "Restroom Available",
  "Pet Friendly",
  "24/7 Security",
];
