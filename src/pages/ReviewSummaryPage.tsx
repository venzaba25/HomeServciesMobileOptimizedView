import { ArrowLeft, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ReviewSummaryPage() {
  const navigate = useNavigate();

  const summary = {
    service: "House Cleaning",
    category: "Cleaning",
    worker: "Ma. Luz Maca",
    dateTime: "Dec 23, 2024 | 10:00 AM",
    workingHours: "2 hours",
    amount: 125.00,
    promo: -37.50,
    total: 87.50,
    payment: "•••• •••• •••• 4679",
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Review Summary</h1>
      </div>

      <div className="flex-1 px-6">
        <div className="space-y-3">
          {[
            ["Services", summary.service],
            ["Category", summary.category],
            ["Workers", summary.worker],
            ["Date & Time", summary.dateTime],
            ["Working Hours", summary.workingHours],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between py-1">
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className="text-sm font-semibold text-foreground">{value}</span>
            </div>
          ))}

          <button className="flex w-full items-center justify-between py-2">
            <span className="text-sm text-muted-foreground">House Cleaning Details</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>

          <div className="my-2 h-px bg-border" />

          {[
            ["House Cleaning", `$${summary.amount.toFixed(2)}`],
            ["Promo", `-$${Math.abs(summary.promo).toFixed(2)}`],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between py-1">
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className={`text-sm font-semibold ${label === "Promo" ? "text-primary" : "text-foreground"}`}>{value}</span>
            </div>
          ))}

          <div className="my-2 h-px bg-border" />

          <div className="flex items-center justify-between py-1">
            <span className="text-sm font-bold text-foreground">Total</span>
            <span className="text-sm font-bold text-foreground">${summary.total.toFixed(2)}</span>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-2xl border border-border p-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">💳</span>
              <span className="text-sm font-semibold text-foreground">{summary.payment}</span>
            </div>
            <button onClick={() => navigate("/payment-methods")} className="text-sm font-semibold text-primary">
              Change
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={() => navigate("/e-receipt")}
          className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}
