import { useNavigate } from "react-router-dom";
import { useState } from "react";

const slides = [
  {
    emoji: "🏠",
    title: "We provide professional service at a friendly price",
    subtitle: "",
  },
  {
    emoji: "✅",
    title: "The best results and your satisfaction is our top priority",
    subtitle: "",
  },
  {
    emoji: "🎨",
    title: "Let's make awesome changes to your home",
    subtitle: "",
  },
];

export default function WelcomePage() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate("/lets-you-in");
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
        <div className="mb-8 text-8xl">{slides[current].emoji}</div>
        <h1 className="mb-4 text-2xl font-bold text-foreground">{slides[current].title}</h1>
        
        {/* Dots */}
        <div className="mb-8 flex gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${
                i === current ? "w-8 bg-primary" : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={handleNext}
          className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg"
        >
          {current === slides.length - 1 ? "Get Started" : "Next"}
        </button>
      </div>
    </div>
  );
}
