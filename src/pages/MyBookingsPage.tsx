import { ArrowLeft, Star, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { providers, categories } from "@/data/services";

type BookingStatus = "upcoming" | "completed" | "cancelled";

const mockBookings = [
  { id: "b1", providerId: "p1", service: "Home Cleaning", date: "Apr 15, 2026", time: "10:00 AM", status: "upcoming" as BookingStatus, price: 25 },
  { id: "b2", providerId: "p6", service: "Wall Painting", date: "Apr 12, 2026", time: "02:00 PM", status: "completed" as BookingStatus, price: 60 },
  { id: "b3", providerId: "p9", service: "Pipe Repair", date: "Apr 10, 2026", time: "09:00 AM", status: "completed" as BookingStatus, price: 45 },
  { id: "b4", providerId: "p4", service: "Furniture Repair", date: "Apr 8, 2026", time: "11:00 AM", status: "cancelled" as BookingStatus, price: 40 },
];

const tabs: { label: string; value: BookingStatus }[] = [
  { label: "Upcoming", value: "upcoming" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

export default function MyBookingsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<BookingStatus>("upcoming");

  const filtered = mockBookings.filter(b => b.status === activeTab);

  return (
    <MobileLayout>
      <div className="space-y-4 p-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">My Bookings</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex-1 rounded-full py-2.5 text-sm font-semibold transition-colors ${
                activeTab === tab.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Bookings List */}
        <div className="space-y-3">
          {filtered.map((booking) => {
            const provider = providers.find(p => p.id === booking.providerId);
            const category = provider ? categories.find(c => c.id === provider.categoryId) : undefined;

            return (
              <div key={booking.id} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="flex items-center gap-3">
                  {category && (
                    <img src={category.image} alt="" className="h-14 w-14 rounded-xl object-cover" width={56} height={56} loading="lazy" />
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-foreground">{booking.service}</h3>
                    <p className="text-xs text-muted-foreground">{provider?.name}</p>
                    <div className="mt-1 flex items-center gap-1">
                      <Star className="h-3 w-3 fill-star text-star" />
                      <span className="text-xs font-semibold">{provider?.rating}</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-primary">${booking.price}</span>
                </div>
                <div className="mt-3 flex items-center gap-4 border-t border-border pt-3">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {booking.date}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" /> {booking.time}
                  </div>
                </div>
                {booking.status === "upcoming" && (
                  <div className="mt-3 flex gap-2">
                    <button className="flex-1 rounded-full border-2 border-destructive py-2 text-xs font-semibold text-destructive">
                      Cancel
                    </button>
                    <button className="flex-1 rounded-full bg-primary py-2 text-xs font-semibold text-primary-foreground">
                      View Details
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-4xl">📋</p>
            <p className="mt-3 text-base font-semibold text-foreground">No {activeTab} bookings</p>
            <p className="mt-1 text-sm text-muted-foreground">Your bookings will appear here</p>
          </div>
        )}
      </div>
    </MobileLayout>
  );
}
