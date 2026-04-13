import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const offers = [
  { discount: "30%", title: "Today's Special!", desc: "Get discount for every order, only valid for today", color: "from-orange-400 to-red-400" },
  { discount: "25%", title: "Friday Special!", desc: "Get discount for every order, only valid for today", color: "from-blue-400 to-purple-400" },
  { discount: "40%", title: "New Promo!", desc: "Get discount for every order, only valid for today", color: "from-green-400 to-teal-400" },
  { discount: "35%", title: "Weekend Special!", desc: "Get discount for every order, only valid for today", color: "from-yellow-400 to-orange-400" },
];

export default function SpecialOffersPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Special Offers</h1>
      </div>

      <div className="flex-1 space-y-4 px-6">
        {offers.map((offer, i) => (
          <div key={i} className={`overflow-hidden rounded-3xl bg-gradient-to-r ${offer.color} p-6`}>
            <p className="text-4xl font-bold text-white">{offer.discount}</p>
            <p className="mt-1 text-lg font-bold text-white">{offer.title}</p>
            <p className="mt-1 text-xs text-white/80">{offer.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
