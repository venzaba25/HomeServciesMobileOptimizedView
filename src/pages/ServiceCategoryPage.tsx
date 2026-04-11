import { ArrowLeft, Star } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { MobileLayout } from "@/components/MobileLayout";
import { getCategoryById, getProvidersByCategory, getSubServicesByCategory, categories } from "@/data/services";

export default function ServiceCategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const category = getCategoryById(categoryId || "");
  const providers = getProvidersByCategory(categoryId || "");
  const subServices = getSubServicesByCategory(categoryId || "");

  if (!category) {
    return (
      <MobileLayout>
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-muted-foreground">Category not found</p>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout>
      <div className="space-y-4 p-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="text-xl font-bold text-foreground">{category.name}</h1>
        </div>

        {/* Hero Image */}
        <div className="relative overflow-hidden rounded-3xl">
          <img
            src={category.image}
            alt={category.name}
            className="h-48 w-full object-cover"
            width={400}
            height={192}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h2 className="text-lg font-bold text-primary-foreground">{category.name} Services</h2>
            <p className="text-xs text-primary-foreground/80">{providers.length} providers available</p>
          </div>
        </div>

        {/* Sub Services */}
        <div>
          <h2 className="mb-3 text-base font-bold text-foreground">Available Services</h2>
          <div className="space-y-2">
            {subServices.map((s) => (
              <div
                key={s.id}
                className="flex items-center justify-between rounded-xl border border-border bg-card p-3"
              >
                <div>
                  <p className="text-sm font-semibold text-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.duration}</p>
                </div>
                <span className="text-sm font-bold text-primary">${s.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Providers */}
        <div>
          <h2 className="mb-3 text-base font-bold text-foreground">Top Providers</h2>
          <div className="space-y-3">
            {providers.map((provider) => (
              <button
                key={provider.id}
                onClick={() => navigate(`/provider/${provider.id}`)}
                className="flex w-full items-center gap-3 rounded-2xl bg-card p-3 text-left shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
              >
                <img
                  src={category.image}
                  alt={provider.name}
                  className="h-16 w-16 rounded-2xl object-cover"
                  loading="lazy"
                  width={64}
                  height={64}
                />
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-foreground truncate">{provider.name}</h3>
                  <p className="text-xs text-muted-foreground truncate">{category.name}</p>
                  <div className="mt-1 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-star text-star" />
                    <span className="text-xs font-semibold">{provider.rating}</span>
                    <span className="text-xs text-muted-foreground">({provider.reviews.toLocaleString()})</span>
                  </div>
                </div>
                <span className="text-sm font-bold text-primary">${provider.price}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
