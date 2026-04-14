import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

export default function CreatePinPage() {
  const navigate = useNavigate();
  const [pin, setPin] = useState("");

  const handleKey = (key: string) => {
    if (key === "del") {
      setPin(pin.slice(0, -1));
    } else if (pin.length < 4) {
      const newPin = pin + key;
      setPin(newPin);
      if (newPin.length === 4) {
        setTimeout(() => navigate("/set-fingerprint"), 400);
      }
    }
  };

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-6">
        <button onClick={() => navigate(-1)} className="mb-8 self-start rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>

        <h1 className="mb-2 text-2xl font-bold text-foreground">Create New PIN</h1>
        <p className="mb-10 text-sm text-muted-foreground">
          Add a PIN number to make your account more secure.
        </p>

        {/* PIN Display */}
        <div className="mb-12 flex justify-center gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className={`flex h-14 w-14 items-center justify-center rounded-xl border-2 text-xl font-bold ${
                pin.length > i
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border text-muted-foreground"
              }`}
            >
              {pin.length > i ? pin[i] : ""}
            </div>
          ))}
        </div>

        {/* Keypad */}
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
