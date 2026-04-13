import { ArrowLeft, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const methods = [
  { icon: "💳", name: "PayPal" },
  { icon: "🔵", name: "Google Pay" },
  { icon: "🍎", name: "Apple Pay" },
  { icon: "💳", name: "•••• •••• •••• 4679" },
  { icon: "💵", name: "Cash Money" },
];

export default function PaymentMethodsPage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(3);

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Payment Methods</h1>
      </div>

      <div className="flex-1 px-6">
        <p className="mb-4 text-sm text-muted-foreground">Select the payment method you want to use</p>
        <div className="space-y-3">
          {methods.map((m, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex w-full items-center gap-4 rounded-2xl border-2 p-4 ${
                selected === i ? "border-primary" : "border-border"
              }`}
            >
              <span className="text-2xl">{m.icon}</span>
              <span className="flex-1 text-left text-sm font-semibold text-foreground">{m.name}</span>
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
          Continue
        </button>
      </div>
    </div>
  );
}
