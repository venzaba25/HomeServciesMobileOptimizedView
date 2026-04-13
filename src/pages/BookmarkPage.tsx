import { ArrowLeft, Bookmark, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { providers, categories } from "@/data/services";

const filterTabs = ["All", "Cleaning", "Repairing", "Painting"];

export default function BookmarkPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const bookmarked = providers.slice(0, 4);

  const filtered = activeTab === "All" ? bookmarked : bookmarked.filter(p => p.categoryId === activeTab.toLowerCase());

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">My Bookmark</h1>
      </div>

      <div className="px-6">
        <div className="mb-4 flex gap-2 overflow-x-auto">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold ${
                activeTab === tab ? "bg-primary text-primary-foreground" : "border border-primary text-primary"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filtered.map((provider) => {
            const category = categories.find(c => c.id === provider.categoryId);
            return (
              <button
                key={provider.id}
                onClick={() => navigate(`/provider/${provider.id}`)}
                className="flex w-full items-center gap-3 rounded-2xl border border-border bg-card p-3"
              >
                {category && (
                  <img src={category.image} alt="" className="h-16 w-16 rounded-2xl object-cover" />
                )}
                <div className="flex-1 min-w-0 text-left">
                  <p className="text-sm font-bold text-foreground">{provider.name}</p>
                  <p className="text-sm font-bold text-primary">${provider.price}</p>
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 fill-star text-star" />
                    <span className="text-xs">{provider.rating}</span>
                    <span className="text-xs text-muted-foreground">| {provider.reviews.toLocaleString()} reviews</span>
                  </div>
                </div>
                <Bookmark className="h-5 w-5 fill-primary text-primary" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
