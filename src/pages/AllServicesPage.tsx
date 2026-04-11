import { ArrowLeft, Search } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useMemo } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { ServiceCategoryCard } from "@/components/ServiceCategoryCard";
import { ProviderCard } from "@/components/ProviderCard";
import { categories, providers, subServices } from "@/data/services";

export default function AllServicesPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return categories;
    return categories.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  const filteredProviders = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return providers.filter(
      p => p.name.toLowerCase().includes(q) || 
           categories.find(c => c.id === p.categoryId)?.name.toLowerCase().includes(q)
    );
  }, [query]);

  const filteredSubServices = useMemo(() => {
    if (!query.trim()) return [];
    return subServices.filter(s => s.name.toLowerCase().includes(query.toLowerCase()));
  }, [query]);

  return (
    <MobileLayout>
      <div className="space-y-4 p-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">All Services</h1>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search services..."
            className="h-12 w-full rounded-2xl border border-border bg-muted pl-12 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            autoFocus={!!initialQuery}
          />
        </div>

        {/* Categories Grid */}
        {!query.trim() && (
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">All Categories</h2>
            <div className="grid grid-cols-4 gap-3">
              {categories.map((cat) => (
                <ServiceCategoryCard key={cat.id} category={cat} />
              ))}
            </div>
          </div>
        )}

        {/* Search Results - Categories */}
        {query.trim() && filteredCategories.length > 0 && (
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">Categories</h2>
            <div className="grid grid-cols-4 gap-3">
              {filteredCategories.map((cat) => (
                <ServiceCategoryCard key={cat.id} category={cat} />
              ))}
            </div>
          </div>
        )}

        {/* Search Results - Sub Services */}
        {query.trim() && filteredSubServices.length > 0 && (
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">Services</h2>
            <div className="space-y-2">
              {filteredSubServices.map((s) => (
                <button
                  key={s.id}
                  onClick={() => navigate(`/services/${s.categoryId}`)}
                  className="flex w-full items-center justify-between rounded-xl bg-card p-3 shadow-sm"
                >
                  <div>
                    <p className="text-sm font-semibold text-foreground">{s.name}</p>
                    <p className="text-xs text-muted-foreground">{s.duration}</p>
                  </div>
                  <span className="text-sm font-bold text-primary">${s.price}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results - Providers */}
        {query.trim() && filteredProviders.length > 0 && (
          <div>
            <h2 className="mb-3 text-base font-bold text-foreground">Service Providers</h2>
            <div className="space-y-3">
              {filteredProviders.map((p) => (
                <ProviderCard key={p.id} provider={p} />
              ))}
            </div>
          </div>
        )}

        {query.trim() && filteredCategories.length === 0 && filteredProviders.length === 0 && filteredSubServices.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-4xl">🔍</p>
            <p className="mt-3 text-base font-semibold text-foreground">No results found</p>
            <p className="mt-1 text-sm text-muted-foreground">Try a different search term</p>
          </div>
        )}
      </div>
    </MobileLayout>
  );
}
