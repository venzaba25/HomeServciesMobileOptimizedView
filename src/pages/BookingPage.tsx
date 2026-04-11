import { ArrowLeft, Calendar, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { getProviderById, getCategoryById, getSubServicesByCategory } from "@/data/services";

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

export default function BookingPage() {
  const { providerId } = useParams<{ providerId: string }>();
  const navigate = useNavigate();
  const provider = getProviderById(providerId || "");
  const category = provider ? getCategoryById(provider.categoryId) : undefined;
  const subServices = provider ? getSubServicesByCategory(provider.categoryId) : [];

  const [selectedDate, setSelectedDate] = useState<number>(15);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [selectedServices, setSelectedServices] = useState<string[]>([subServices[0]?.id || ""]);
  const [address, setAddress] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  if (!provider || !category) {
    return (
      <MobileLayout hideNav>
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-muted-foreground">Provider not found</p>
        </div>
      </MobileLayout>
    );
  }

  const toggleService = (id: string) => {
    setSelectedServices(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const totalPrice = subServices
    .filter(s => selectedServices.includes(s.id))
    .reduce((sum, s) => sum + s.price, 0);

  const handleBook = () => {
    setShowSuccess(true);
  };

  if (showSuccess) {
    return (
      <MobileLayout hideNav>
        <div className="flex min-h-screen flex-col items-center justify-center p-8 text-center">
          <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary">
            <CheckCircle2 className="h-12 w-12 text-primary-foreground" />
          </div>
          <h1 className="mb-2 text-2xl font-bold text-foreground">Booking Successful!</h1>
          <p className="mb-2 text-sm text-muted-foreground">Your booking has been confirmed</p>
          <p className="mb-8 text-sm text-muted-foreground">
            {provider.name} • April {selectedDate} • {selectedTime}
          </p>
          <button
            onClick={() => navigate("/bookings")}
            className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
          >
            View My Bookings
          </button>
          <button
            onClick={() => navigate("/")}
            className="mt-3 w-full rounded-full border-2 border-primary py-4 text-base font-bold text-primary"
          >
            Back to Home
          </button>
        </div>
      </MobileLayout>
    );
  }

  const days = Array.from({ length: 7 }, (_, i) => i + 14);

  return (
    <MobileLayout hideNav>
      <div className="space-y-5 p-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Booking Details</h1>
        </div>

        {/* Provider Info */}
        <div className="flex items-center gap-3 rounded-2xl bg-secondary p-3">
          <img src={category.image} alt={provider.name} className="h-14 w-14 rounded-xl object-cover" width={56} height={56} />
          <div>
            <h3 className="text-sm font-bold text-foreground">{provider.name}</h3>
            <p className="text-xs text-muted-foreground">{category.name}</p>
          </div>
        </div>

        {/* Select Services */}
        <div>
          <h2 className="mb-2 text-base font-bold text-foreground">Select Services</h2>
          <div className="space-y-2">
            {subServices.map((s) => (
              <button
                key={s.id}
                onClick={() => toggleService(s.id)}
                className={`flex w-full items-center justify-between rounded-xl border-2 p-3 transition-colors ${
                  selectedServices.includes(s.id) ? "border-primary bg-secondary" : "border-border bg-card"
                }`}
              >
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.duration}</p>
                </div>
                <span className="text-sm font-bold text-primary">${s.price}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        <div>
          <h2 className="mb-2 flex items-center gap-2 text-base font-bold text-foreground">
            <Calendar className="h-5 w-5 text-primary" /> Select Date
          </h2>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDate(day)}
                className={`flex min-w-[52px] flex-col items-center rounded-2xl px-3 py-3 transition-colors ${
                  selectedDate === day ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                }`}
              >
                <span className="text-[10px] font-medium">Apr</span>
                <span className="text-lg font-bold">{day}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <h2 className="mb-2 flex items-center gap-2 text-base font-bold text-foreground">
            <Clock className="h-5 w-5 text-primary" /> Select Time
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {timeSlots.map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`rounded-xl px-3 py-2.5 text-xs font-semibold transition-colors ${
                  selectedTime === time ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>

        {/* Address */}
        <div>
          <h2 className="mb-2 flex items-center gap-2 text-base font-bold text-foreground">
            <MapPin className="h-5 w-5 text-primary" /> Your Address
          </h2>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="h-12 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>

        {/* Summary & Book */}
        <div className="rounded-2xl bg-secondary p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="text-xl font-bold text-primary">${totalPrice}</span>
          </div>
          <button
            onClick={handleBook}
            className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg transition-transform active:scale-95"
          >
            Confirm Booking
          </button>
        </div>
      </div>
    </MobileLayout>
  );
}
