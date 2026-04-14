import { ArrowLeft, Search, X, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

const recentSearches = [
  "Motorcycle Repairing",
  "Painting the Walls",
  "Water Faucet Repairing",
  "Window Cleaning",
  "House Shifting",
  "Computer Repairing",
  "Cloth Laundry",
  "Floor Wash",
];

export default function SearchPage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [recents, setRecents] = useState(recentSearches);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search-results?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <MobileLayout hideNav>
      <div className="space-y-4 p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSearch()}
              placeholder="Search"
              className="h-11 w-full rounded-xl border border-border bg-muted pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              autoFocus
            />
          </div>
          <button onClick={() => navigate("/filter")} className="rounded-xl border border-border p-2.5 hover:bg-muted">
            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M3 4h18M7 9h10M10 14h4" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-foreground">Recent</h2>
          <button onClick={() => setRecents([])} className="text-sm font-semibold text-primary">Clear All</button>
        </div>

        <div className="space-y-1">
          {recents.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                setQuery(item);
                navigate(`/search-results?q=${encodeURIComponent(item)}`);
              }}
              className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-muted"
            >
              <Clock className="h-4 w-4 text-muted-foreground" />
              <span className="flex-1 text-left text-sm text-foreground">{item}</span>
              <X className="h-4 w-4 text-muted-foreground" onClick={(e) => {
                e.stopPropagation();
                setRecents(r => r.filter((_, idx) => idx !== i));
              }} />
            </button>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
}
