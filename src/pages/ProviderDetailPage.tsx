import { ArrowLeft, Star, MapPin, Clock, Briefcase, CheckCircle } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { MobileLayout } from "@/components/MobileLayout";
import { getProviderById, getCategoryById, getSubServicesByCategory } from "@/data/services";

export default function ProviderDetailPage() {
  const { providerId } = useParams<{ providerId: string }>();
  const navigate = useNavigate();
  const provider = getProviderById(providerId || "");
  const category = provider ? getCategoryById(provider.categoryId) : undefined;
  const subServices = provider ? getSubServicesByCategory(provider.categoryId) : [];

  if (!provider || !category) {
    return (
      <MobileLayout hideNav>
        <div className="flex min-h-[60vh] items-center justify-center">
          <p className="text-muted-foreground">Provider not found</p>
        </div>
      </MobileLayout>
    );
  }

  return (
    <MobileLayout hideNav>
      <div>
        {/* Hero */}
        <div className="relative">
          <img
            src={category.image}
            alt={provider.name}
            className="h-64 w-full object-cover"
            width={400}
            height={256}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 top-4 rounded-full bg-background/80 p-2 backdrop-blur-sm"
          >
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </button>
          <div className="absolute bottom-4 left-4 right-4">
            <h1 className="text-xl font-bold text-primary-foreground">{provider.name}</h1>
            <p className="text-sm text-primary-foreground/80">{category.name}</p>
            <div className="mt-2 flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-full bg-primary px-2 py-0.5">
                <Star className="h-3 w-3 fill-primary-foreground text-primary-foreground" />
                <span className="text-xs font-bold text-primary-foreground">{provider.rating}</span>
              </div>
              <span className="text-xs text-primary-foreground/70">
                {provider.reviews.toLocaleString()} reviews
              </span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-5 p-4">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-secondary p-3 text-center">
              <Clock className="mx-auto mb-1 h-5 w-5 text-primary" />
              <p className="text-xs font-bold text-foreground">{provider.experience}</p>
              <p className="text-[10px] text-muted-foreground">Experience</p>
            </div>
            <div className="rounded-2xl bg-secondary p-3 text-center">
              <Briefcase className="mx-auto mb-1 h-5 w-5 text-primary" />
              <p className="text-xs font-bold text-foreground">{provider.completedJobs.toLocaleString()}</p>
              <p className="text-[10px] text-muted-foreground">Jobs Done</p>
            </div>
            <div className="rounded-2xl bg-secondary p-3 text-center">
              <MapPin className="mx-auto mb-1 h-5 w-5 text-primary" />
              <p className="text-xs font-bold text-foreground">5 km</p>
              <p className="text-[10px] text-muted-foreground">Distance</p>
            </div>
          </div>

          {/* About */}
          <div>
            <h2 className="mb-2 text-base font-bold text-foreground">About</h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{provider.description}</p>
          </div>

          {/* Services */}
          <div>
            <h2 className="mb-2 text-base font-bold text-foreground">Services Offered</h2>
            <div className="space-y-2">
              {subServices.map((s) => (
                <div key={s.id} className="flex items-center gap-2 rounded-xl border border-border p-3">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="flex-1 text-sm font-medium text-foreground">{s.name}</span>
                  <span className="text-xs text-muted-foreground">{s.duration}</span>
                  <span className="text-sm font-bold text-primary">${s.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Book Button */}
          <button
            onClick={() => navigate(`/booking/${provider.id}`)}
            className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg transition-transform active:scale-95"
          >
            Book Now - ${provider.price}
          </button>
        </div>
      </div>
    </MobileLayout>
  );
}
