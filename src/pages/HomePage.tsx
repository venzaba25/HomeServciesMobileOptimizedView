import { Bell, ChevronRight, Bookmark } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/MobileLayout";
import { SearchBar } from "@/components/SearchBar";
import { ServiceCategoryCard } from "@/components/ServiceCategoryCard";
import { ProviderCard } from "@/components/ProviderCard";
import { categories, popularServices } from "@/data/services";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="space-y-6 p-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Good Morning 👋</p>
            <h1 className="text-xl font-bold text-foreground">Venz Aba</h1>
          </div>
          <div className="flex gap-2">
            <button onClick={() => navigate("/notifications")} className="relative rounded-full p-2 hover:bg-muted">
              <Bell className="h-6 w-6 text-foreground" />
              <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-full bg-primary" />
            </button>
            <button onClick={() => navigate("/bookmarks")} className="rounded-full p-2 hover:bg-muted">
              <Bookmark className="h-6 w-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Search */}
        <SearchBar />

        {/* Special Offers Banner */}
        <button onClick={() => navigate("/special-offers")} className="w-full overflow-hidden rounded-3xl bg-primary p-5 text-left">
          <div className="flex items-center justify-between">
            <div className="space-y-2">
              <p className="text-xs font-semibold text-primary-foreground/80">Special Offer</p>
              <h2 className="text-lg font-bold text-primary-foreground">30% Off</h2>
              <p className="text-xs text-primary-foreground/70">on your first home cleaning</p>
              <span className="mt-1 inline-block rounded-full bg-primary-foreground px-4 py-1.5 text-xs font-bold text-primary">
                Book Now
              </span>
            </div>
            <span className="text-6xl">🏠</span>
          </div>
        </button>

        {/* Services */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Services</h2>
            <button
              onClick={() => navigate("/services")}
              className="flex items-center gap-1 text-sm font-semibold text-primary"
            >
              See All <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {categories.map((cat) => (
              <ServiceCategoryCard key={cat.id} category={cat} />
            ))}
          </div>
        </div>

        {/* Most Popular Services */}
        <div>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">Most Popular Services</h2>
            <button
              onClick={() => navigate("/most-popular")}
              className="flex items-center gap-1 text-sm font-semibold text-primary"
            >
              See All <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-3">
            {popularServices.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
