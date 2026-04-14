import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

const categoryFilters = ["All", "Cleaning", "Repairing", "Painting", "Laundry", "Plumbing"];
const ratingOptions = ["All", "5", "4", "3", "2"];

export default function FilterPage() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState(80);
  const [rating, setRating] = useState("All");

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col p-4">
        <div className="mb-6 flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">Filter</h1>
        </div>

        {/* Category */}
        <div className="mb-6">
          <h2 className="mb-3 text-base font-bold text-foreground">Category</h2>
          <div className="flex flex-wrap gap-2">
            {categoryFilters.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  category === c
                    ? "bg-primary text-primary-foreground"
                    : "border-2 border-primary text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <h2 className="mb-3 text-base font-bold text-foreground">Price</h2>
          <input
            type="range"
            min={0}
            max={200}
            value={priceRange}
            onChange={e => setPriceRange(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>$0</span>
            <span className="font-semibold text-primary">${priceRange}</span>
            <span>$200</span>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-8">
          <h2 className="mb-3 text-base font-bold text-foreground">Rating</h2>
          <div className="flex gap-2">
            {ratingOptions.map(r => (
              <button
                key={r}
                onClick={() => setRating(r)}
                className={`flex items-center gap-1 rounded-full px-4 py-2 text-xs font-semibold transition-colors ${
                  rating === r
                    ? "bg-primary text-primary-foreground"
                    : "border-2 border-primary text-primary"
                }`}
              >
                {r !== "All" && "⭐"} {r}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto flex gap-3">
          <button
            onClick={() => { setCategory("All"); setPriceRange(80); setRating("All"); }}
            className="flex-1 rounded-full border-2 border-primary py-3.5 text-sm font-bold text-primary"
          >
            Reset
          </button>
          <button
            onClick={() => navigate(-1)}
            className="flex-1 rounded-full bg-primary py-3.5 text-sm font-bold text-primary-foreground"
          >
            Filter
          </button>
        </div>
      </div>
    </MobileLayout>
  );
}
