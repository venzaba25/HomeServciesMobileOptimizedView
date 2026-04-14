import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function CongratulationsPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center bg-foreground p-6 text-center">
      {/* Success Icon */}
      <div className="mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-primary">
        <CheckCircle className="h-16 w-16 text-primary-foreground" />
      </div>

      <h1 className="mb-3 text-2xl font-bold text-primary">Congratulations!</h1>
      <p className="mb-10 text-sm text-muted-foreground">
        Your account is ready to use. You will be redirected to the Home page in a few seconds.
      </p>

      {/* Decorative dots */}
      <div className="mb-10 flex gap-2">
        <div className="h-2 w-2 rounded-full bg-primary opacity-40" />
        <div className="h-2 w-2 rounded-full bg-primary opacity-60" />
        <div className="h-2 w-2 rounded-full bg-primary" />
        <div className="h-2 w-2 rounded-full bg-primary opacity-60" />
        <div className="h-2 w-2 rounded-full bg-primary opacity-40" />
      </div>

      <button
        onClick={() => navigate("/")}
        className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
      >
        Go to Home
      </button>
    </div>
  );
}
