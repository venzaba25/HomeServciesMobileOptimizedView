import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

export default function EnterPinPage() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");

  const handleKey = (key: string) => {
    if (key === "del") {
      setPin(pin.slice(0, -1));
    } else if (pin.length < 4) {
      const newPin = pin + key;
      setPin(newPin);
      if (newPin.length === 4) {
        setTimeout(() => navigate("/booking-success"), 400);
      }
    }
  };

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-6">
        <button onClick={() => navigate(-1)} className="mb-8 self-start rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>

        <h1 className="mb-2 text-2xl font-bold text-foreground">Enter Your PIN</h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Enter your PIN to confirm payment
        </p>

        <div className="mb-12 flex justify-center gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold ${
                pin.length > i
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {pin.length > i ? "●" : ""}
            </div>
          ))}
        </div>

        <button
          onClick={() => pin.length === 4 && navigate("/booking-success")}
          className="mb-8 w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
        >
          Continue
        </button>

        <div className="mx-auto grid w-64 grid-cols-3 gap-4">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "del"].map((key) => (
            <button
              key={key}
              onClick={() => handleKey(key)}
              className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-semibold text-foreground transition-colors hover:bg-muted mx-auto"
            >
              {key === "del" ? "⌫" : key}
            </button>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
}
