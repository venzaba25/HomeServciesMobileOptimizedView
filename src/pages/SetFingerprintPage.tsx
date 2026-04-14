import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/MobileLayout";

export default function SetFingerprintPage() {
  const navigate = useNavigate();

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col items-center p-6">
        <div className="mb-8 flex w-full items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Set Your Fingerprint</h1>
        </div>

        <p className="mb-10 text-center text-sm text-muted-foreground">
          Add a fingerprint to make your account more secure.
        </p>

        {/* Fingerprint Icon */}
        <div className="mb-10 flex h-48 w-48 items-center justify-center">
          <svg viewBox="0 0 100 100" className="h-40 w-40 text-primary">
            <path
              d="M50 10 C25 10 10 30 10 50 C10 70 25 90 50 90"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M50 20 C30 20 20 35 20 50 C20 65 30 80 50 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M50 30 C38 30 30 40 30 50 C30 60 38 70 50 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M50 40 C44 40 40 45 40 50 C40 55 44 60 50 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M50 10 C75 10 90 30 90 50 C90 70 75 90 50 90"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M50 20 C70 20 80 35 80 50 C80 65 70 80 50 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
            />
            <path
              d="M50 30 C62 30 70 40 70 50 C70 60 62 70 50 70"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </div>

        <p className="mb-auto text-center text-sm text-muted-foreground">
          Please put your finger on the fingerprint scanner to get started.
        </p>

        <div className="flex w-full gap-3">
          <button
            onClick={() => navigate("/congratulations")}
            className="flex-1 rounded-full border-2 border-primary py-3.5 text-sm font-bold text-primary"
          >
            Skip
          </button>
          <button
            onClick={() => navigate("/congratulations")}
            className="flex-1 rounded-full bg-primary py-3.5 text-sm font-bold text-primary-foreground"
          >
            Continue
          </button>
        </div>
      </div>
    </MobileLayout>
  );
}
