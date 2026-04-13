import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const daysOfWeek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

export default function CalendarPage() {
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState(23);
  const [month] = useState("December 2024");

  // Generate days for December
  const startDay = 6; // Sunday start offset for Dec 2024
  const totalDays = 31;
  const blanks = Array.from({ length: startDay }, (_, i) => i);
  const days = Array.from({ length: totalDays }, (_, i) => i + 1);

  const bookings = selectedDay === 23
    ? [
        { service: "House Cleaning", provider: "Ma. Luz Maca", status: "Upcoming" },
        { service: "Appliance Service", provider: "Alex Reynolds", status: "Upcoming" },
      ]
    : [];

  return (
    <div className="mx-auto min-h-screen max-w-md bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">My Calendar</h1>
      </div>

      <div className="px-6">
        {/* Month Navigation */}
        <div className="mb-4 flex items-center justify-between">
          <span className="text-base font-bold text-foreground">{month}</span>
          <div className="flex gap-2">
            <button className="rounded-full p-1 hover:bg-muted"><ChevronLeft className="h-5 w-5" /></button>
            <button className="rounded-full p-1 hover:bg-muted"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="mb-6 grid grid-cols-7 gap-1">
          {daysOfWeek.map((d) => (
            <div key={d} className="py-2 text-center text-xs font-semibold text-muted-foreground">{d}</div>
          ))}
          {blanks.map((b) => (
            <div key={`blank-${b}`} />
          ))}
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`rounded-full py-2 text-sm font-semibold ${
                selectedDay === day
                  ? "bg-primary text-primary-foreground"
                  : day === 19
                  ? "bg-destructive/20 text-destructive"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Service Bookings */}
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-base font-bold text-foreground">Service Booking ({bookings.length})</h2>
          {bookings.length > 0 && (
            <button className="text-sm font-semibold text-primary">See All</button>
          )}
        </div>

        {bookings.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-4xl mb-3">📋</p>
            <p className="text-base font-semibold text-foreground">You have no service booking</p>
            <p className="text-sm text-muted-foreground">You don't have a service booking on this date</p>
          </div>
        ) : (
          <div className="space-y-3">
            {bookings.map((b, i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl border border-border p-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-xl">🏠</div>
                <div>
                  <p className="text-sm font-bold text-foreground">{b.service}</p>
                  <p className="text-xs text-muted-foreground">{b.provider}</p>
                  <span className="mt-1 inline-block rounded-md bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {b.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
