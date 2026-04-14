import { ArrowLeft, Minus, Plus, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

const items = ["Table", "Chair", "Television", "Carpet", "Washing Machine", "Sofa", "Cupboard"];

export default function ShiftingBookingPage() {
  const navigate = useNavigate();
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(items.map(i => [i, 0]))
  );
  const basePrice = 10;
  const totalItems = Object.values(counts).reduce((a, b) => a + b, 0);
  const totalPrice = totalItems * basePrice;

  const update = (item: string, delta: number) => {
    setCounts(c => ({ ...c, [item]: Math.max(0, c[item] + delta) }));
  };

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-4">
        <div className="mb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="flex-1 text-xl font-bold text-foreground">House Shifting</h1>
          <button className="rounded-full p-2 hover:bg-muted">
            <Clock className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <p className="mb-4 text-sm text-muted-foreground">Enter the number of items you want to shift.</p>

        <div className="flex-1 space-y-3">
          {items.map(item => (
            <div key={item} className="flex items-center justify-between py-2">
              <span className="text-sm font-semibold text-foreground">{item}</span>
              <div className="flex items-center gap-3">
                <button onClick={() => update(item, -1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-border">
                  <Minus className="h-3 w-3 text-foreground" />
                </button>
                <span className="w-5 text-center text-sm font-bold text-foreground">{counts[item]}</span>
                <button onClick={() => update(item, 1)} className="flex h-7 w-7 items-center justify-center rounded-full border border-border">
                  <Plus className="h-3 w-3 text-foreground" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/shifting-address")}
          className="mt-6 w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
        >
          Continue - ${totalPrice}
        </button>
      </div>
    </MobileLayout>
  );
}
