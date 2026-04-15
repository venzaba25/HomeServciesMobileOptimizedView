import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";

export default function SplashPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/onboarding"), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center bg-background">
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-2 border-primary">
        <Home className="h-10 w-10 text-primary" />
      </div>
    </div>
  );
}
