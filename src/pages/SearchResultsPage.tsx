import { ArrowLeft, Search } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { ProviderCard } from "@/components/ProviderCard";
import { providers, categories } from "@/data/services";

export default function SearchResultsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return providers.filter(
      p => p.name.toLowerCase().includes(q) ||
        categories.find(c => c.id === p.categoryId)?.name.toLowerCase().includes(q)
    );
  }, [query]);

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
              placeholder="Search"
              className="h-11 w-full rounded-xl border border-border bg-muted pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
          </div>
          <button onClick={() => navigate("/filter")} className="rounded-xl border border-border p-2.5 hover:bg-muted">
            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M3 4h18M7 9h10M10 14h4" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Results for "<span className="font-semibold text-primary">{query}</span>"
          </p>
          <span className="text-sm font-semibold text-primary">{results.length} found</span>
        </div>

        {results.length > 0 ? (
          <div className="space-y-3">
            {results.map(p => (
              <ProviderCard key={p.id} provider={p} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-6xl">🧐</p>
            <h3 className="mt-4 text-lg font-bold text-foreground">Not Found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Sorry, the keyword you entered cannot be found, please check again or search with another keyword.
            </p>
          </div>
        )}
      </div>
    </MobileLayout>
  );
}
