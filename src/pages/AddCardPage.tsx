import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AddCardPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    cardName: "", cardNumber: "", expiry: "", cvv: "",
  });

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Add New Card</h1>
      </div>

      <div className="flex-1 px-6">
        {/* Card Preview */}
        <div className="mb-8 rounded-2xl bg-gradient-to-br from-primary to-primary/70 p-6">
          <p className="mb-4 text-xs text-primary-foreground/70">Card Number</p>
          <p className="mb-6 text-lg font-bold tracking-widest text-primary-foreground">
            {form.cardNumber || "•••• •••• •••• ••••"}
          </p>
          <div className="flex justify-between">
            <div>
              <p className="text-[10px] text-primary-foreground/70">Card Holder</p>
              <p className="text-sm font-semibold text-primary-foreground">{form.cardName || "Your Name"}</p>
            </div>
            <div>
              <p className="text-[10px] text-primary-foreground/70">Expiry</p>
              <p className="text-sm font-semibold text-primary-foreground">{form.expiry || "MM/YY"}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-xs font-semibold text-muted-foreground">Card Name</label>
            <input
              type="text"
              value={form.cardName}
              onChange={(e) => setForm({ ...form, cardName: e.target.value })}
              className="w-full rounded-xl bg-muted px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-semibold text-muted-foreground">Card Number</label>
            <input
              type="text"
              value={form.cardNumber}
              onChange={(e) => setForm({ ...form, cardNumber: e.target.value })}
              className="w-full rounded-xl bg-muted px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">Expiry Date</label>
              <input
                type="text"
                value={form.expiry}
                onChange={(e) => setForm({ ...form, expiry: e.target.value })}
                placeholder="MM/YY"
                className="w-full rounded-xl bg-muted px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div className="flex-1">
              <label className="mb-1 block text-xs font-semibold text-muted-foreground">CVV</label>
              <input
                type="text"
                value={form.cvv}
                onChange={(e) => setForm({ ...form, cvv: e.target.value })}
                className="w-full rounded-xl bg-muted px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg"
        >
          Add New Card
        </button>
      </div>
    </div>
  );
}
