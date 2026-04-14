import { ArrowLeft, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

export default function LaundryBookingPage() {
  const navigate = useNavigate();
  const [weight, setWeight] = useState("12");
  const [ironingService, setIroningService] = useState("Yes");
  const [fragranceService, setFragranceService] = useState("Yes");
  const basePrice = 21;

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-4">
        <div className="mb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="flex-1 text-xl font-bold text-foreground">Laundry Services</h1>
          <button className="rounded-full p-2 hover:bg-muted">
            <Clock className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <p className="mb-6 text-sm text-muted-foreground">Enter the weight and the service you need.</p>

        <div className="space-y-5 flex-1">
          <div>
            <label className="mb-2 block text-sm font-bold text-foreground">Weight Total Clothing</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)}
                className="h-11 flex-1 rounded-xl border border-border bg-muted px-4 text-sm text-foreground focus:border-primary focus:outline-none"
              />
              <span className="text-sm font-semibold text-muted-foreground">kg</span>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-foreground">Ironing Service</label>
            <select
              value={ironingService}
              onChange={e => setIroningService(e.target.value)}
              className="h-11 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-foreground">Fragrance Service</label>
            <select
              value={fragranceService}
              onChange={e => setFragranceService(e.target.value)}
              className="h-11 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <button
          onClick={() => navigate(`/booking-details?price=${basePrice}`)}
          className="mt-6 w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
        >
          Continue - ${basePrice}
        </button>
      </div>
    </MobileLayout>
  );
}
