import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const promos = [
  { icon: "🎉", title: "Special 25% Off", desc: "Special promo only today!", discount: 25 },
  { icon: "🌟", title: "Discount 30% Off", desc: "New user special promo!", discount: 30 },
  { icon: "💜", title: "Special 20% Off", desc: "Special promo only today!", discount: 20 },
  { icon: "🔥", title: "Discount 40% Off", desc: "Special promo only today!", discount: 40 },
  { icon: "✨", title: "Discount 35% Off", desc: "Special promo only today!", discount: 35 },
];

export default function AddPromoPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Add Promo</h1>
      </div>

      <div className="flex-1 px-6">
        <div className="space-y-3">
          {promos.map((promo, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex w-full items-center gap-4 rounded-2xl border-2 p-4 transition-colors ${
                selected === i ? "border-primary bg-secondary" : "border-border"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-xl">
                {promo.icon}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-bold text-foreground">{promo.title}</p>
                <p className="text-xs text-muted-foreground">{promo.desc}</p>
              </div>
              <div className={`h-5 w-5 rounded-full border-2 ${selected === i ? "border-primary bg-primary" : "border-border"}`}>
                {selected === i && <div className="m-0.5 h-3 w-3 rounded-full bg-primary-foreground" />}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg"
        >
          Apply Promo
        </button>
      </div>
    </div>
  );
}
