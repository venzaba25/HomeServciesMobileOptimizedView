import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const securityItems = [
  { key: "remember", label: "Remember me" },
  { key: "faceId", label: "Face ID" },
  { key: "biometric", label: "Biometric ID" },
  { key: "google", label: "Google Authenticator" },
];

export default function SecurityPage() {
  const navigate = useNavigate();
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    remember: true, faceId: false, biometric: false, google: false,
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
        <h1 className="text-xl font-bold text-foreground">Security</h1>
      </div>

      <div className="flex-1 px-6">
        <div className="space-y-1">
          {securityItems.map((s) => (
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

        <div className="mt-6 space-y-3">
          <button className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground">
            Change PIN
          </button>
          <button className="w-full rounded-full border-2 border-primary py-4 text-base font-bold text-primary">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}
