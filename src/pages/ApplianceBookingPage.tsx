import { ArrowLeft, Clock, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

const appliances = [
  "Washing Machine", "Refrigerator", "Dispenser", "Air Conditioner",
  "Grilling Machine", "Washers & Dryers",
];

export default function ApplianceBookingPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string[]>(["Washing Machine", "Refrigerator", "Washers & Dryers"]);
  const basePrice = 26;
  const totalPrice = selected.length * basePrice;

  const toggle = (item: string) => {
    setSelected(s => s.includes(item) ? s.filter(x => x !== item) : [...s, item]);
  };

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-4">
        <div className="mb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="flex-1 text-xl font-bold text-foreground">Appliance Services</h1>
          <button className="rounded-full p-2 hover:bg-muted">
            <Clock className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <p className="mb-6 text-sm text-muted-foreground">Choose the appliance service you need.</p>

        <div className="flex-1 space-y-2">
          {appliances.map(item => (
            <button
              key={item}
              onClick={() => toggle(item)}
              className="flex w-full items-center justify-between rounded-xl border border-border p-4"
            >
              <span className="text-sm font-semibold text-foreground">{item}</span>
              <div className={`flex h-6 w-6 items-center justify-center rounded-md ${
                selected.includes(item) ? "bg-primary" : "border-2 border-muted-foreground"
              }`}>
                {selected.includes(item) && <Check className="h-4 w-4 text-primary-foreground" />}
              </div>
            </button>
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
