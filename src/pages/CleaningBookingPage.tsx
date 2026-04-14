import { ArrowLeft, Minus, Plus, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

const rooms = ["Living Room", "Terrace", "Bedroom", "Bathroom", "Kitchen", "Dining Room", "Garage"];

export default function CleaningBookingPage() {
  const navigate = useNavigate();
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(rooms.map(r => [r, 0]))
  );

  const basePrice = 20;
  const totalRooms = Object.values(counts).reduce((a, b) => a + b, 0);
  const totalPrice = totalRooms * basePrice;

  const update = (room: string, delta: number) => {
    setCounts(c => ({ ...c, [room]: Math.max(0, c[room] + delta) }));
  };

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-4">
        <div className="mb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="flex-1 text-xl font-bold text-foreground">House Cleaning</h1>
          <button className="rounded-full p-2 hover:bg-muted">
            <Clock className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <p className="mb-4 text-sm text-muted-foreground">Enter the number of items to be cleaned.</p>

        <div className="flex-1 space-y-3">
          {rooms.map(room => (
            <div key={room} className="flex items-center justify-between rounded-xl py-2">
              <span className="text-sm font-semibold text-foreground">{room}</span>
              <div className="flex items-center gap-3">
                <button onClick={() => update(room, -1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-border">
                  <Minus className="h-3 w-3 text-foreground" />
                </button>
                <span className="w-5 text-center text-sm font-bold text-foreground">{counts[room]}</span>
                <button onClick={() => update(room, 1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-border">
                  <Plus className="h-3 w-3 text-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate(`/booking-details?price=${basePrice}`)}
          className="mt-6 w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
        >
          Continue - ${totalPrice}
        </button>
      </div>
    </MobileLayout>
  );
}
