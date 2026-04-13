import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

export default function VerifyCodePage() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", ""]);
  const [timer, setTimer] = useState(55);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    if (value && index < 3) {
      refs.current[index + 1]?.focus();
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Forgot Password</h1>
      </div>

      <div className="flex-1 px-6">
        <p className="mb-8 text-sm text-muted-foreground">
          Code has been send to +1 111 ******99
        </p>

        <div className="mb-6 flex justify-center gap-4">
          {code.map((digit, i) => (
            <input
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              className="h-16 w-16 rounded-2xl border-2 border-border bg-muted text-center text-2xl font-bold text-foreground focus:border-primary focus:outline-none"
            />
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground">
          Resend code in <span className="text-primary font-semibold">{timer} s</span>
        </p>
      </div>

      <div className="p-6">
        <button
          onClick={() => navigate("/create-password")}
          className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg"
        >
          Verify
        </button>
      </div>
    </div>
  );
}
