import { ArrowLeft, Share2, Download, Printer } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function EReceiptPage() {
  const navigate = useNavigate();

  const receipt = {
    service: "House Cleaning",
    category: "Cleaning",
    worker: "Ma. Luz Maca",
    dateTime: "Dec 23, 2024 | 10:00 AM",
    workingHours: "2 hours",
    amount: 125.00,
    promo: -37.50,
    paymentMethod: "Credit Card",
    date: "Dec 14, 2024 | 10:01:16 AM",
    transactionId: "SK7263727399",
    status: "Paid",
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">E-Receipt</h1>
        </div>
        <div className="flex gap-2">
          <button className="rounded-full p-2 hover:bg-muted"><Share2 className="h-5 w-5 text-foreground" /></button>
          <button className="rounded-full p-2 hover:bg-muted"><Download className="h-5 w-5 text-foreground" /></button>
          <button className="rounded-full p-2 hover:bg-muted"><Printer className="h-5 w-5 text-foreground" /></button>
        </div>
      </div>

      <div className="flex-1 px-6">
        {/* Barcode */}
        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-64 items-center justify-center rounded-xl bg-muted">
            <div className="flex gap-0.5">
              {Array.from({ length: 30 }, (_, i) => (
                <div key={i} className={`${i % 3 === 0 ? "w-1" : "w-0.5"} h-14 bg-foreground`} />
              ))}
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-3">
          {[
            ["Services", receipt.service],
            ["Category", receipt.category],
            ["Workers", receipt.worker],
            ["Date & Time", receipt.dateTime],
            ["Working Hours", receipt.workingHours],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between py-1">
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className="text-sm font-semibold text-foreground">{value}</span>
            </div>
          ))}

          <div className="my-3 h-px bg-border" />

          {[
            ["House Cleaning", `$${receipt.amount.toFixed(2)}`],
            ["Promo", `-$${Math.abs(receipt.promo).toFixed(2)}`],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between py-1">
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className={`text-sm font-semibold ${label === "Promo" ? "text-primary" : "text-foreground"}`}>{value}</span>
            </div>
          ))}

          <div className="my-3 h-px bg-border" />

          {[
            ["Payment Methods", receipt.paymentMethod],
            ["Date", receipt.date],
            ["Transaction ID", receipt.transactionId],
            ["Status", receipt.status],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between py-1">
              <span className="text-sm text-muted-foreground">{label}</span>
              <span className={`text-sm font-semibold ${label === "Status" ? "text-primary" : "text-foreground"}`}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
