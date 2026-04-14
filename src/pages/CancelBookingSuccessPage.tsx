import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

export default function CancelBookingSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col items-center justify-center bg-foreground/95 p-6 text-center">
      <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-primary">
        <CheckCircle className="h-14 w-14 text-primary-foreground" />
      </div>

      <h1 className="mb-3 text-2xl font-bold text-primary">Cancel Booking Successful!</h1>
      <p className="mb-10 text-sm text-muted-foreground">
        You have successfully canceled your service booking. 80% funds will be returned to your account!
      </p>

      <button
        onClick={() => navigate("/bookings")}
        className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
      >
        OK
      </button>
    </div>
  );
}
