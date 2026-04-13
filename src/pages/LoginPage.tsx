import { ArrowLeft, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
      </div>

      <div className="flex-1 px-6">
        <h1 className="mb-8 text-3xl font-bold text-foreground">Login to your<br />Account</h1>

        <div className="space-y-4">
          <div className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3">
            <Mail className="h-5 w-5 text-muted-foreground" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-3 rounded-xl bg-muted px-4 py-3">
            <Lock className="h-5 w-5 text-muted-foreground" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff className="h-5 w-5 text-muted-foreground" /> : <Eye className="h-5 w-5 text-muted-foreground" />}
            </button>
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={remember}
              onChange={(e) => setRemember(e.target.checked)}
              className="h-5 w-5 rounded border-border accent-primary"
            />
            <span className="text-sm font-semibold text-foreground">Remember me</span>
          </label>

          <button
            onClick={handleLogin}
            className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg"
          >
            Sign in
          </button>

          <button
            onClick={() => navigate("/forgot-password")}
            className="w-full text-center text-sm font-semibold text-primary"
          >
            Forgot the password?
          </button>
        </div>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs text-muted-foreground">or continue with</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="flex justify-center gap-4">
          {["📘", "🔵", "🍎"].map((icon, i) => (
            <button key={i} className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border text-2xl">
              {icon}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 text-center">
        <p className="text-sm text-muted-foreground">
          Don't have an account?{" "}
          <button onClick={() => navigate("/signup")} className="font-semibold text-primary">
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}
