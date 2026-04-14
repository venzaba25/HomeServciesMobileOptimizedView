import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

const paymentMethods = [
  { icon: "🅿️", name: "PayPal" },
  { icon: "🇬", name: "Google Pay" },
  { icon: "🍎", name: "Apple Pay" },
];

export default function CancelBookingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState<"methods" | "confirm">("confirm");
  const [selectedMethod, setSelectedMethod] = useState("PayPal");

  if (step === "confirm") {
    return (
      <MobileLayout hideNav>
        <div className="flex min-h-screen flex-col items-center justify-center p-6">
          <div className="w-full rounded-3xl bg-background p-6 text-center shadow-lg">
            <h2 className="mb-2 text-xl font-bold text-destructive">Cancel Booking</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Are you sure you want to cancel your service booking?
            </p>
            <p className="mb-6 text-xs text-muted-foreground">
              Only 80% of the money you can refund from your payment according to our policy.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => navigate(-1)}
                className="flex-1 rounded-full border-2 border-primary py-3 text-sm font-bold text-primary"
              >
                Cancel
              </button>
              <button
                onClick={() => setStep("methods")}
                className="flex-1 rounded-full bg-primary py-3 text-sm font-bold text-primary-foreground"
              >
                Yes, Cancel Booking
              </button>
            </div>
          </div>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-6">
        <div className="mb-6 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Payment Methods</h1>
        </div>

        <p className="mb-4 text-sm text-muted-foreground">
          Please select a payment refund method (only 80% will be refunded).
        </p>

        <div className="space-y-3">
          {paymentMethods.map(m => (
            <button
              key={m.name}
              onClick={() => setSelectedMethod(m.name)}
              className="flex w-full items-center gap-3 rounded-xl border border-border p-4"
            >
              <span className="text-xl">{m.icon}</span>
              <span className="flex-1 text-left text-sm font-semibold text-foreground">{m.name}</span>
              <div className={`h-5 w-5 rounded-full border-2 ${
                selectedMethod === m.name ? "border-primary bg-primary" : "border-muted-foreground"
              }`} />
            </button>
          ))}
        </div>

        <div className="mt-auto space-y-3 pt-8">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Paid: $87.50</span>
            <span className="font-bold text-foreground">Refund: $70.00</span>
          </div>
          <button
            onClick={() => navigate("/cancel-booking-success")}
            className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
          >
            Continue
          </button>
        </div>
      </div>
    </MobileLayout>
  );
}
