import cleaningImg from "@/assets/cleaning.jpg";
import repairingImg from "@/assets/repairing.jpg";
import paintingImg from "@/assets/painting.jpg";
import laundryImg from "@/assets/laundry.jpg";
import plumbingImg from "@/assets/plumbing.jpg";
import electricalImg from "@/assets/electrical.jpg";
import shiftingImg from "@/assets/shifting.jpg";
import applianceImg from "@/assets/appliance.jpg";

export type ServiceCategory = {
  id: string;
  name: string;
  icon: string;
  image: string;
  color: string;
};

export type ServiceProvider = {
  id: string;
  name: string;
  categoryId: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  description: string;
  experience: string;
  completedJobs: number;
};

export type SubService = {
  id: string;
  name: string;
  categoryId: string;
  price: number;
  duration: string;
};

export const categories: ServiceCategory[] = [
  { id: "cleaning", name: "Cleaning", icon: "🧹", image: cleaningImg, color: "bg-blue-50" },
  { id: "repairing", name: "Repairing", icon: "🔧", image: repairingImg, color: "bg-orange-50" },
  { id: "painting", name: "Painting", icon: "🎨", image: paintingImg, color: "bg-pink-50" },
  { id: "laundry", name: "Laundry", icon: "👕", image: laundryImg, color: "bg-cyan-50" },
  { id: "plumbing", name: "Plumbing", icon: "🔩", image: plumbingImg, color: "bg-green-50" },
  { id: "electrical", name: "Electrical", icon: "⚡", image: electricalImg, color: "bg-yellow-50" },
  { id: "shifting", name: "Shifting", icon: "📦", image: shiftingImg, color: "bg-purple-50" },
  { id: "appliance", name: "Appliance", icon: "🔌", image: applianceImg, color: "bg-red-50" },
];

export const subServices: SubService[] = [
  { id: "home-cleaning", name: "Home Cleaning", categoryId: "cleaning", price: 25, duration: "2-3 hrs" },
  { id: "floor-cleaning", name: "Floor Cleaning", categoryId: "cleaning", price: 20, duration: "1-2 hrs" },
  { id: "carpet-cleaning", name: "Carpet Cleaning", categoryId: "cleaning", price: 35, duration: "2-3 hrs" },
  { id: "bathroom-cleaning", name: "Bathroom Cleaning", categoryId: "cleaning", price: 15, duration: "1 hr" },
  { id: "kitchen-cleaning", name: "Kitchen Cleaning", categoryId: "cleaning", price: 30, duration: "2 hrs" },
  { id: "window-cleaning", name: "Window Cleaning", categoryId: "cleaning", price: 18, duration: "1-2 hrs" },
  { id: "furniture-repair", name: "Furniture Repair", categoryId: "repairing", price: 40, duration: "2-4 hrs" },
  { id: "door-repair", name: "Door Repair", categoryId: "repairing", price: 30, duration: "1-2 hrs" },
  { id: "roof-repair", name: "Roof Repair", categoryId: "repairing", price: 80, duration: "4-6 hrs" },
  { id: "wall-repair", name: "Wall Repair", categoryId: "repairing", price: 50, duration: "3-5 hrs" },
  { id: "wall-painting", name: "Wall Painting", categoryId: "painting", price: 60, duration: "4-6 hrs" },
  { id: "house-painting", name: "House Painting", categoryId: "painting", price: 200, duration: "2-3 days" },
  { id: "fence-painting", name: "Fence Painting", categoryId: "painting", price: 45, duration: "3-4 hrs" },
  { id: "wash-fold", name: "Wash & Fold", categoryId: "laundry", price: 15, duration: "1 day" },
  { id: "dry-cleaning", name: "Dry Cleaning", categoryId: "laundry", price: 25, duration: "2 days" },
  { id: "ironing", name: "Ironing", categoryId: "laundry", price: 10, duration: "Same day" },
  { id: "pipe-repair", name: "Pipe Repair", categoryId: "plumbing", price: 45, duration: "1-2 hrs" },
  { id: "faucet-install", name: "Faucet Installation", categoryId: "plumbing", price: 35, duration: "1 hr" },
  { id: "drain-cleaning", name: "Drain Cleaning", categoryId: "plumbing", price: 40, duration: "1-2 hrs" },
  { id: "wiring", name: "Wiring", categoryId: "electrical", price: 55, duration: "2-3 hrs" },
  { id: "switch-install", name: "Switch Installation", categoryId: "electrical", price: 20, duration: "30 min" },
  { id: "fan-install", name: "Fan Installation", categoryId: "electrical", price: 30, duration: "1 hr" },
  { id: "local-shifting", name: "Local Shifting", categoryId: "shifting", price: 150, duration: "1 day" },
  { id: "office-shifting", name: "Office Shifting", categoryId: "shifting", price: 300, duration: "1-2 days" },
  { id: "packing", name: "Packing Service", categoryId: "shifting", price: 50, duration: "3-4 hrs" },
  { id: "ac-repair", name: "AC Repair", categoryId: "appliance", price: 45, duration: "1-2 hrs" },
  { id: "washing-machine", name: "Washing Machine Repair", categoryId: "appliance", price: 40, duration: "1-2 hrs" },
  { id: "fridge-repair", name: "Fridge Repair", categoryId: "appliance", price: 50, duration: "2-3 hrs" },
];

export const providers: ServiceProvider[] = [
  { id: "p1", name: "Ma. Luz Maca", categoryId: "cleaning", image: "", rating: 4.8, reviews: 8289, price: 25, description: "Professional cleaning expert with 5+ years experience in residential and commercial cleaning.", experience: "5 years", completedJobs: 1250 },
  { id: "p2", name: "Wade Warren", categoryId: "cleaning", image: "", rating: 4.6, reviews: 6342, price: 20, description: "Specialized in deep cleaning and sanitization services.", experience: "3 years", completedJobs: 890 },
  { id: "p3", name: "Robert Fox", categoryId: "cleaning", image: "", rating: 4.9, reviews: 4521, price: 30, description: "Expert in carpet and upholstery cleaning with eco-friendly products.", experience: "7 years", completedJobs: 2100 },
  { id: "p4", name: "Jacob Jones", categoryId: "repairing", image: "", rating: 4.7, reviews: 3867, price: 40, description: "Skilled handyman specializing in home repairs and maintenance.", experience: "6 years", completedJobs: 1800 },
  { id: "p5", name: "Albert Flores", categoryId: "repairing", image: "", rating: 4.5, reviews: 5234, price: 35, description: "Expert in furniture and door repairs.", experience: "4 years", completedJobs: 950 },
  { id: "p6", name: "Ralph Edwards", categoryId: "painting", image: "", rating: 4.8, reviews: 7123, price: 60, description: "Professional painter with expertise in interior and exterior painting.", experience: "8 years", completedJobs: 3200 },
  { id: "p7", name: "Bessie Cooper", categoryId: "painting", image: "", rating: 4.6, reviews: 2987, price: 55, description: "Creative painter specializing in decorative and artistic wall finishes.", experience: "5 years", completedJobs: 1100 },
  { id: "p8", name: "Dianne Russell", categoryId: "laundry", image: "", rating: 4.9, reviews: 4156, price: 15, description: "Premium laundry service with fabric care expertise.", experience: "4 years", completedJobs: 6500 },
  { id: "p9", name: "Devon Lane", categoryId: "plumbing", image: "", rating: 4.7, reviews: 3421, price: 45, description: "Licensed plumber with emergency service availability.", experience: "6 years", completedJobs: 2300 },
  { id: "p10", name: "Cameron Williamson", categoryId: "electrical", image: "", rating: 4.8, reviews: 5632, price: 55, description: "Certified electrician for residential and commercial wiring.", experience: "9 years", completedJobs: 4100 },
  { id: "p11", name: "Brooklyn Simmons", categoryId: "shifting", image: "", rating: 4.5, reviews: 2876, price: 150, description: "Reliable house shifting with careful packing and transport.", experience: "5 years", completedJobs: 800 },
  { id: "p12", name: "Leslie Alexander", categoryId: "appliance", image: "", rating: 4.7, reviews: 4098, price: 45, description: "Expert in all major appliance repairs and maintenance.", experience: "7 years", completedJobs: 3500 },
];

export const popularServices = providers.filter(p => p.rating >= 4.7).slice(0, 8);

export function getProvidersByCategory(categoryId: string) {
  return providers.filter(p => p.categoryId === categoryId);
}

export function getSubServicesByCategory(categoryId: string) {
  return subServices.filter(s => s.categoryId === categoryId);
}

export function getCategoryById(id: string) {
  return categories.find(c => c.id === id);
}

export function getProviderById(id: string) {
  return providers.find(p => p.id === id);
}
