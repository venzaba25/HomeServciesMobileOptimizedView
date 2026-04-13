import { ArrowLeft, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [method, setMethod] = useState<"sms" | "email">("sms");

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Forgot Password</h1>
      </div>

      <div className="flex-1 px-6">
        <div className="mb-6 flex justify-center">
          <span className="text-8xl">🔐</span>
        </div>
        <p className="mb-6 text-sm text-muted-foreground">
          Select which contact details should we use to reset your password
        </p>

        <div className="space-y-3">
          <button
            onClick={() => setMethod("sms")}
            className={`flex w-full items-center gap-4 rounded-2xl border-2 p-4 transition-colors ${
              method === "sms" ? "border-primary bg-secondary" : "border-border"
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">via SMS</p>
              <p className="text-sm font-semibold text-foreground">+1 111 ******99</p>
            </div>
          </button>

          <button
            onClick={() => setMethod("email")}
            className={`flex w-full items-center gap-4 rounded-2xl border-2 p-4 transition-colors ${
              method === "email" ? "border-primary bg-secondary" : "border-border"
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground">via Email</p>
              <p className="text-sm font-semibold text-foreground">and***ley@yourdomain.com</p>
            </div>
          </button>
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={() => navigate("/verify-code")}
          className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
