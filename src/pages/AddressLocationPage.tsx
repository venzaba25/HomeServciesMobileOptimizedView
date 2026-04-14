import { ArrowLeft, MapPin, Clock } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MobileLayout } from "@/components/MobileLayout";

export default function AddressLocationPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const price = searchParams.get("price") || "0";

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 p-4">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="flex-1 text-xl font-bold text-foreground">Your Address/Location</h1>
          <button className="rounded-full p-2 hover:bg-muted">
            <Clock className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Map Placeholder */}
        <div className="relative mx-4 h-64 overflow-hidden rounded-2xl bg-muted">
          <div className="flex h-full items-center justify-center bg-secondary/50">
            <div className="text-center">
              <MapPin className="mx-auto h-10 w-10 text-primary" />
              <p className="mt-2 text-sm font-semibold text-foreground">Your Location</p>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="mt-4 flex-1 rounded-t-3xl border-t border-border p-6">
          <h2 className="mb-4 text-base font-bold text-foreground">Location Details</h2>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-xs text-muted-foreground">Address</label>
              <div className="flex items-center gap-2 rounded-xl border border-border p-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-foreground">267 New Avenue Park, New York</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate(`/payment-methods?price=${price}`)}
            className="mt-8 w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
          >
            Continue
          </button>
        </div>
      </div>
    </MobileLayout>
  );
}
