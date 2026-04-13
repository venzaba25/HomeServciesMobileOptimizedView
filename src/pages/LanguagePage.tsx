import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const suggested = ["English (US)", "English (UK)"];
const languages = ["Mandarin", "Hindi", "Spanish", "French", "Arabic", "Bengali", "Russian", "Indonesia"];

export default function LanguagePage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("English (US)");
  const all = [...suggested, ...languages];

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Language</h1>
      </div>

      <div className="flex-1 px-6">
        <p className="mb-3 text-xs font-semibold text-muted-foreground">Suggested</p>
        {suggested.map((lang) => (
          <button
            key={lang}
            onClick={() => setSelected(lang)}
            className="flex w-full items-center justify-between py-3.5"
          >
            <span className="text-sm font-semibold text-foreground">{lang}</span>
            {selected === lang && <Check className="h-5 w-5 text-primary" />}
          </button>
        ))}

        <div className="my-3 h-px bg-border" />

        <p className="mb-3 text-xs font-semibold text-muted-foreground">Language</p>
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => setSelected(lang)}
            className="flex w-full items-center justify-between py-3.5"
          >
            <span className="text-sm font-semibold text-foreground">{lang}</span>
            {selected === lang && <Check className="h-5 w-5 text-primary" />}
          </button>
        ))}
      </div>
    </div>
  );
}
