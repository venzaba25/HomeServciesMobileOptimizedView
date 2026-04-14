import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { ProviderCard } from "@/components/ProviderCard";
import { providers, categories } from "@/data/services";

const filterTabs = ["All", "Cleaning", "Repairing", "Painting"];

export default function MostPopularPage() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? providers
    : providers.filter(p => {
        const cat = categories.find(c => c.id === p.categoryId);
        return cat?.name.toLowerCase() === activeFilter.toLowerCase();
      });

  return (
    <MobileLayout>
      <div className="space-y-4 p-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="flex-1 text-xl font-bold text-foreground">Most Popular Services</h1>
          <button className="rounded-full p-2 hover:bg-muted">
            <Search className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 overflow-x-auto">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`whitespace-nowrap rounded-full px-5 py-2 text-xs font-semibold transition-colors ${
                activeFilter === tab
                  ? "bg-primary text-primary-foreground"
                  : "border-2 border-primary text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map(p => (
            <ProviderCard key={p.id} provider={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-4xl">🔍</p>
            <p className="mt-3 text-base font-semibold text-foreground">No services found</p>
          </div>
        )}
      </div>
    </MobileLayout>
  );
}
