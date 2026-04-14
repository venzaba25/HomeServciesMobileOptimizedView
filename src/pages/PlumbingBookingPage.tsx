import { ArrowLeft, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

export default function PlumbingBookingPage() {
  const navigate = useNavigate();
  const [pipes, setPipes] = useState("7");
  const [damage, setDamage] = useState("Water pipe jammed and leaking");
  const basePrice = 27;

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-4">
        <div className="mb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="flex-1 text-xl font-bold text-foreground">Plumbing Repairing</h1>
          <button className="rounded-full p-2 hover:bg-muted">
            <Clock className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <p className="mb-6 text-sm text-muted-foreground">Enter the number of pipes and the damage.</p>

        <div className="flex-1 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-foreground">Number of Water Pipes</label>
            <input
              type="number"
              value={pipes}
              onChange={e => setPipes(e.target.value)}
              className="h-11 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-foreground">Damage Occurred</label>
            <textarea
              value={damage}
              onChange={e => setDamage(e.target.value)}
              rows={3}
              className="w-full rounded-xl border border-border bg-muted px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
            />
          </div>
        </div>

        <button
          onClick={() => navigate(`/booking-details?price=${basePrice}`)}
          className="mt-6 w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
        >
          Continue - ${Number(pipes) * basePrice}
        </button>
      </div>
    </MobileLayout>
  );
}
