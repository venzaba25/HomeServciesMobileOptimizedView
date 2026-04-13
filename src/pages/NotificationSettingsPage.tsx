import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const settings = [
  { key: "general", label: "General Notification" },
  { key: "sound", label: "Sound" },
  { key: "vibrate", label: "Vibrate" },
  { key: "special", label: "Special Offers" },
  { key: "promo", label: "Promo & Discount" },
  { key: "payments", label: "Payments" },
  { key: "cashback", label: "Cashback" },
  { key: "appUpdates", label: "App Updates" },
  { key: "newService", label: "New Service Available" },
  { key: "newTips", label: "New Tips Available" },
];

export default function NotificationSettingsPage() {
  const navigate = useNavigate();
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    general: true, sound: true, vibrate: false, special: true,
    promo: false, payments: true, cashback: true, appUpdates: false,
    newService: false, newTips: false,
  });

  const toggle = (key: string) => {
    setToggles({ ...toggles, [key]: !toggles[key] });
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Notification</h1>
      </div>

      <div className="flex-1 px-6">
        <div className="space-y-1">
          {settings.map((s) => (
            <div key={s.key} className="flex items-center justify-between py-3.5">
              <span className="text-sm font-semibold text-foreground">{s.label}</span>
              <button
                onClick={() => toggle(s.key)}
                className={`relative h-7 w-12 rounded-full transition-colors ${
                  toggles[s.key] ? "bg-primary" : "bg-muted"
                }`}
              >
                <div
                  className={`absolute top-0.5 h-6 w-6 rounded-full bg-background shadow-sm transition-transform ${
                    toggles[s.key] ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
