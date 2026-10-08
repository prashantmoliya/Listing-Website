export interface CustomerInquiryItem {
  id: string;
  listingId: string;
  listingName: string;
  listingCategory: string;
  listingCity: string;
  fullName: string;
  phone: string;
  email: string;
  service: string;
  preferredContact: "WhatsApp" | "Phone" | "Email";
  message: string;
  status: "Pending" | "Resolved" | "Rejected";
  date: string;
  time: string;
  createdAt: string;
}

export const initialCustomerInquiries: CustomerInquiryItem[] = [
  {
    id: "inq-101",
    listingId: "r-1",
    listingName: "Urban Style Hair & Beauty Salon",
    listingCategory: "Health & Beauty",
    listingCity: "Pune",
    fullName: "Priya Sengupta",
    phone: "9876543210",
    email: "priya.sen@example.com",
    service: "Bridal Makeup & Pre-Bridal Package",
    preferredContact: "WhatsApp",
    message: "Hi, I have my sister's wedding scheduled in Pune for next month. Looking for a comprehensive pre-bridal package and bridal makeover quote for 3 people. Please share packages.",
    status: "Pending",
    date: "08 Oct 2026",
    time: "04:15 PM",
    createdAt: "2026-10-08T16:15:00.000Z",
  },
  {
    id: "inq-102",
    listingId: "lst-1",
    listingName: "Royal Palace Heritage Hotel & Resort",
    listingCategory: "Hotels & Travel",
    listingCity: "Jaipur, Rajasthan",
    fullName: "Rajesh Kulkarni",
    phone: "9823456789",
    email: "rajesh.k@example.com",
    service: "Royal Suite Weekend Package",
    preferredContact: "Phone",
    message: "Need tariff and availability for 4 premium deluxe heritage rooms for a family reunion weekend (24th to 26th). Please call me during office hours.",
    status: "Pending",
    date: "07 Oct 2026",
    time: "11:30 AM",
    createdAt: "2026-10-07T11:30:00.000Z",
  },
  {
    id: "inq-103",
    listingId: "r-1",
    listingName: "Urban Style Hair & Beauty Salon",
    listingCategory: "Health & Beauty",
    listingCity: "Pune",
    fullName: "Neha Deshmukh",
    phone: "9819283746",
    email: "neha.deshmukh@example.com",
    service: "Keratin & Hair Spa Treatment",
    preferredContact: "WhatsApp",
    message: "Hi! Wanted to check slot availability and charges for Keratin treatment this coming Saturday afternoon around 3 PM.",
    status: "Resolved",
    date: "06 Oct 2026",
    time: "02:45 PM",
    createdAt: "2026-10-06T14:45:00.000Z",
  },
  {
    id: "inq-104",
    listingId: "lst-2",
    listingName: "Apex Multi-Speciality Clinic & Diagnostic Center",
    listingCategory: "Doctors & Health",
    listingCity: "Ahmedabad, Gujarat",
    fullName: "Vikram Mehta",
    phone: "9909012345",
    email: "vikram.mehta@example.com",
    service: "Executive Full Body Health Checkup",
    preferredContact: "Email",
    message: "Could you please send the detailed list of diagnostic tests included in the Executive Full Body Health Checkup package and fasting instructions?",
    status: "Rejected",
    date: "03 Oct 2026",
    time: "09:20 AM",
    createdAt: "2026-10-03T09:20:00.000Z",
  },
];

let customerInquiries: CustomerInquiryItem[] = [...initialCustomerInquiries];

export function getStoredInquiries(): CustomerInquiryItem[] {
  return [...customerInquiries];
}

export function saveCustomerInquiry(
  input: Omit<CustomerInquiryItem, "id" | "status" | "date" | "time" | "createdAt">
): CustomerInquiryItem {
  const now = new Date();
  const dateFormatted = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const timeFormatted = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const newInquiry: CustomerInquiryItem = {
    ...input,
    id: `inq-${Date.now()}`,
    status: "Pending",
    date: dateFormatted,
    time: timeFormatted,
    createdAt: now.toISOString(),
  };

  customerInquiries = [newInquiry, ...customerInquiries];

  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("inquiries-updated", { detail: newInquiry }));
  }

  return newInquiry;
}

export function updateCustomerInquiryStatus(
  id: string,
  newStatus: CustomerInquiryItem["status"]
): void {
  customerInquiries = customerInquiries.map((item) =>
    item.id === id ? { ...item, status: newStatus } : item
  );

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("inquiries-updated"));
  }
}

export function deleteCustomerInquiry(id: string): void {
  customerInquiries = customerInquiries.filter((item) => item.id !== id);

  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("inquiries-updated"));
  }
}
