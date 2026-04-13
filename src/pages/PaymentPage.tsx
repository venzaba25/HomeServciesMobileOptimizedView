import { ArrowLeft, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const paymentMethods = [
  { icon: "💳", name: "PayPal", status: "Connected" },
  { icon: "🔵", name: "Google Pay", status: "Connected" },
  { icon: "🍎", name: "Apple Pay", status: "Connected" },
  { icon: "💳", name: "•••• •••• •••• 4679", status: "Connected" },
];

export default function PaymentPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Payment</h1>
      </div>

      <div className="flex-1 px-6">
        <div className="space-y-3">
          {paymentMethods.map((pm, i) => (
            <div key={i} className="flex items-center gap-4 rounded-2xl border border-border p-4">
              <span className="text-2xl">{pm.icon}</span>
              <span className="flex-1 text-sm font-semibold text-foreground">{pm.name}</span>
              <span className="text-xs font-semibold text-primary">{pm.status}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={() => navigate("/add-card")}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg"
        >
          <Plus className="h-5 w-5" /> Add New Card
        </button>
      </div>
    </div>
  );
}
