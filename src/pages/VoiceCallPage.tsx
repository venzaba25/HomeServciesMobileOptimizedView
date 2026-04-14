import { ArrowLeft, Phone, Video, Volume2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function VoiceCallPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center bg-background p-6">
      <div className="mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-primary/20">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
          ML
        </div>
      </div>

      <h1 className="mb-1 text-xl font-bold text-foreground">Ma. Luz Maca</h1>
      <p className="mb-20 text-sm text-muted-foreground">04:38 minutes</p>

      <div className="flex gap-6">
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive text-primary-foreground">
          <Volume2 className="h-6 w-6" />
        </button>
        <button className="flex h-14 w-14 items-center justify-center rounded-full bg-muted text-foreground">
          <Video className="h-6 w-6" />
        </button>
        <button
          onClick={() => navigate(-1)}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-destructive text-primary-foreground"
        >
          <Phone className="h-6 w-6 rotate-[135deg]" />
        </button>
      </div>
    </div>
  );
}
