import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"];
const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export default function BookingDetailsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const price = searchParams.get("price") || "0";
  const [selectedDate, setSelectedDate] = useState(23);
  const [workingHours, setWorkingHours] = useState(2);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [promoCode, setPromoCode] = useState("");
  const [month] = useState(new Date());

  const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();
  const firstDay = new Date(month.getFullYear(), month.getMonth(), 1).getDay();
  const offset = firstDay === 0 ? 6 : firstDay - 1;

  const totalPrice = Number(price) * workingHours;

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-4">
        <div className="mb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Booking Details</h1>
        </div>

        {/* Select Date */}
        <h2 className="mb-2 text-sm font-bold text-foreground">Select Date</h2>
        <div className="mb-4 rounded-2xl border border-border p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm font-bold text-foreground">
              {month.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
            </span>
            <div className="flex gap-1">
              <button className="p-1"><ChevronLeft className="h-4 w-4" /></button>
              <button className="p-1"><ChevronRight className="h-4 w-4" /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {daysOfWeek.map(d => (
              <span key={d} className="text-[10px] font-semibold text-muted-foreground">{d}</span>
            ))}
            {Array.from({ length: offset }).map((_, i) => <span key={`e${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              return (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`rounded-full py-1.5 text-xs font-medium ${
                    selectedDate === day
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted"
                  }`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        {/* Working Hours */}
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold text-foreground">Working Hours</h2>
              <p className="text-[10px] text-muted-foreground">Cost increase after 2 hrs of work</p>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => setWorkingHours(Math.max(1, workingHours - 1))} className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-foreground">−</button>
              <span className="text-sm font-bold text-foreground">{workingHours}</span>
              <button onClick={() => setWorkingHours(workingHours + 1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-foreground">+</button>
            </div>
          </div>
        </div>

        {/* Start Time */}
        <div className="mb-4">
          <h2 className="mb-2 text-sm font-bold text-foreground">Choose Start Time</h2>
          <div className="flex gap-2 overflow-x-auto">
            {timeSlots.map(t => (
              <button
                key={t}
                onClick={() => setSelectedTime(t)}
                className={`whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold ${
                  selectedTime === t
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Promo Code */}
        <div className="mb-6">
          <h2 className="mb-2 text-sm font-bold text-foreground">Promo Code</h2>
          <input
            type="text"
            value={promoCode}
            onChange={e => setPromoCode(e.target.value)}
            placeholder="Enter Promo Code"
            className="h-11 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>

        <button
          onClick={() => navigate(`/address-location?price=${totalPrice}`)}
          className="mt-auto w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
        >
          Continue - ${totalPrice}
        </button>
      </div>
    </MobileLayout>
  );
}
