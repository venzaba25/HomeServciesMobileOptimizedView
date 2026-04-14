import { ArrowLeft, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

export default function ShiftingAddressPage() {
  const navigate = useNavigate();
  const [from, setFrom] = useState("267 New Avenue Park, New York");
  const [to, setTo] = useState("660 Grand City Hall, New York");

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-4">
        <div className="mb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="flex-1 text-xl font-bold text-foreground">House Shifting</h1>
        </div>

        <p className="mb-6 text-sm text-muted-foreground">Select the origin & destination of the shifting.</p>

        <div className="flex-1 space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-3 flex flex-col items-center">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <div className="h-16 w-0.5 bg-border" />
              <div className="h-3 w-3 rounded-full bg-primary" />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <label className="mb-1 block text-xs text-muted-foreground">From</label>
                <div className="flex items-center gap-2 rounded-xl border border-border p-3">
                  <MapPin className="h-4 w-4 text-destructive" />
                  <input
                    type="text"
                    value={from}
                    onChange={e => setFrom(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-foreground focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="mb-1 block text-xs text-muted-foreground">Destination</label>
                <div className="flex items-center gap-2 rounded-xl border border-border p-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <input
                    type="text"
                    value={to}
                    onChange={e => setTo(e.target.value)}
                    className="flex-1 bg-transparent text-sm text-foreground focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/booking-details?price=32")}
          className="mt-6 w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
        >
          Continue - $280
        </button>
      </div>
    </MobileLayout>
  );
}
