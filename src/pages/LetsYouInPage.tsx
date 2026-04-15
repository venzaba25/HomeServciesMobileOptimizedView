import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function LetsYouInPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
      </div>

      <div className="flex flex-1 flex-col items-center px-6">
        {/* Illustration placeholder */}
        <div className="mb-6 flex h-48 w-48 items-center justify-center text-8xl">🧑‍💻</div>

        <h1 className="mb-8 text-3xl font-bold text-foreground">Let's you in</h1>

        {/* Social buttons */}
        <div className="w-full space-y-3">
          <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-border py-3.5 text-sm font-semibold text-foreground hover:bg-muted">
            <span className="text-xl">🔵</span> Continue with Facebook
          </button>
          <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-border py-3.5 text-sm font-semibold text-foreground hover:bg-muted">
            <span className="text-xl">🟡</span> Continue with Google
          </button>
          <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-border py-3.5 text-sm font-semibold text-foreground hover:bg-muted">
            <span className="text-xl">🍎</span> Continue with Apple
          </button>
        </div>

        {/* Divider */}
        <div className="my-6 flex w-full items-center gap-3">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm text-muted-foreground">or</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <button
          onClick={() => navigate("/login")}
          className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg"
        >
          Sign in with password
        </button>

        <p className="mt-6 text-sm text-muted-foreground">
          Don't have an account?{" "}
          <button onClick={() => navigate("/signup")} className="font-semibold text-primary">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
