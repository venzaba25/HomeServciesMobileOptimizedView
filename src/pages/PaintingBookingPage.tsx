import { ArrowLeft, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

const colors = [
  "bg-white border border-border", "bg-black", "bg-red-500", "bg-pink-500",
  "bg-orange-500", "bg-yellow-400", "bg-green-500", "bg-teal-500",
  "bg-blue-500", "bg-indigo-500", "bg-purple-500", "bg-emerald-500",
];

export default function PaintingBookingPage() {
  const navigate = useNavigate();
  const [size, setSize] = useState("Medium");
  const [selectedColor, setSelectedColor] = useState(6);
  const basePrice = 22;

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-4">
        <div className="mb-4 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="flex-1 text-xl font-bold text-foreground">Painting House Walls</h1>
          <button className="rounded-full p-2 hover:bg-muted">
            <Clock className="h-5 w-5 text-foreground" />
          </button>
        </div>

        <p className="mb-4 text-sm text-muted-foreground">Choose the size of the house & the color you want.</p>

        <div className="mb-6">
          <h2 className="mb-2 text-sm font-bold text-foreground">Size of House</h2>
          <select
            value={size}
            onChange={e => setSize(e.target.value)}
            className="h-11 w-full rounded-xl border border-border bg-muted px-4 text-sm text-foreground"
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <div className="mb-6">
          <h2 className="mb-3 text-sm font-bold text-foreground">Select Paint Color</h2>
          <div className="grid grid-cols-6 gap-3">
            {colors.map((color, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(i)}
                className={`h-10 w-10 rounded-full ${color} ${
                  selectedColor === i ? "ring-2 ring-primary ring-offset-2" : ""
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate(`/booking-details?price=${basePrice}`)}
          className="mt-auto w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground"
        >
          Continue - ${basePrice}
        </button>
      </div>
    </MobileLayout>
  );
}
