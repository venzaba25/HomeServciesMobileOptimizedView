import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { ServiceProvider } from "@/data/services";
import { categories } from "@/data/services";

export function ProviderCard({ provider }: { provider: ServiceProvider }) {
  const navigate = useNavigate();
  const category = categories.find(c => c.id === provider.categoryId);

  return (
    <button
      onClick={() => navigate(`/provider/${provider.id}`)}
      className="flex w-full items-center gap-3 rounded-2xl bg-card p-3 text-left shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
    >
      <img
        src={category?.image}
        alt={provider.name}
        className="h-16 w-16 rounded-2xl object-cover"
        loading="lazy"
        width={64}
        height={64}
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-bold text-foreground truncate">{provider.name}</h3>
        <p className="text-xs text-muted-foreground truncate">{category?.name}</p>
        <div className="mt-1 flex items-center gap-1">
          <Star className="h-3 w-3 fill-star text-star" />
          <span className="text-xs font-semibold text-foreground">{provider.rating}</span>
          <span className="text-xs text-muted-foreground">({provider.reviews.toLocaleString()} reviews)</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-sm font-bold text-primary">${provider.price}</span>
      </div>
    </button>
  );
}
