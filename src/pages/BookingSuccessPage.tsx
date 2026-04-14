import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function BookingSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center bg-foreground/95 p-6 text-center">
      <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-primary">
        <CheckCircle className="h-14 w-14 text-primary-foreground" />
      </div>

      <h1 className="mb-3 text-2xl font-bold text-primary">Booking Successful!</h1>
      <p className="mb-10 text-sm text-muted-foreground">
        You have successfully made payment and book the services.
      </p>

      <button
        onClick={() => navigate("/e-receipt")}
        className="mb-3 w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
      >
        View E-Receipt
      </button>
      <button
        onClick={() => navigate("/inbox")}
        className="w-full rounded-full border-2 border-primary py-4 text-base font-bold text-primary"
      >
        Message Workers
      </button>
    </div>
  );
}
