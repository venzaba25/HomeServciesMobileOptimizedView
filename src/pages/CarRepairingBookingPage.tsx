import { ArrowLeft, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

export default function CarRepairingBookingPage() {
  const navigate = useNavigate();
  const [brand, setBrand] = useState("Ford F-Series");
  const [model, setModel] = useState("F-450");
  const [plate, setPlate] = useState("BB 2638 GHA");
  const basePrice = 24;

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-4">
        <div className="mb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="flex-1 text-xl font-bold text-foreground">Car Repairing</h1>
          <button className="rounded-full p-2 hover:bg-muted">
            <Clock className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <p className="mb-6 text-sm text-muted-foreground">Enter the type and series of the car to be repaired.</p>

        <div className="flex-1 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-foreground">Car Brand</label>
            <select
              value={brand}
              onChange={e => setBrand(e.target.value)}
              className="h-11 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground"
            >
              <option>Ford F-Series</option>
              <option>Toyota Camry</option>
              <option>Honda Civic</option>
              <option>BMW 3 Series</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-foreground">Series/Model</label>
            <select
              value={model}
              onChange={e => setModel(e.target.value)}
              className="h-11 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground"
            >
              <option>F-450</option>
              <option>F-350</option>
              <option>F-250</option>
              <option>F-150</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-foreground">Plate Number</label>
            <input
              type="text"
              value={plate}
              onChange={e => setPlate(e.target.value)}
              className="h-11 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={() => navigate(`/booking-details?price=${basePrice}`)}
          className="mt-6 w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
        >
          Continue - $120
        </button>
      </div>
    </MobileLayout>
  );
}
