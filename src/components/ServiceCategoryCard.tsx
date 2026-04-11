import { useNavigate } from "react-router-dom";
import type { ServiceCategory } from "@/data/services";

export function ServiceCategoryCard({ category }: { category: ServiceCategory }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/services/${category.id}`)}
      className="flex flex-col items-center gap-2 rounded-2xl bg-secondary p-4 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="text-3xl">{category.icon}</span>
      <span className="text-xs font-semibold text-foreground">{category.name}</span>
    </button>
  );
}
