import { ChevronRight, Settings, CreditCard, HelpCircle, Shield, LogOut, Bell, Star } from "lucide-react";
import { MobileLayout } from "@/components/MobileLayout";

const menuItems = [
  { icon: Star, label: "My Favorites", color: "text-star" },
  { icon: CreditCard, label: "Payment Methods", color: "text-primary" },
  { icon: Bell, label: "Notifications", color: "text-primary" },
  { icon: Shield, label: "Security", color: "text-success" },
  { icon: HelpCircle, label: "Help Center", color: "text-warning" },
  { icon: Settings, label: "Settings", color: "text-muted-foreground" },
];

export default function ProfilePage() {
  return (
    <MobileLayout>
      <div className="space-y-6 p-4">
        {/* Profile Header */}
        <div className="flex flex-col items-center pt-4">
          <div className="mb-3 flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
            AA
          </div>
          <h1 className="text-xl font-bold text-foreground">Andrew Ainsley</h1>
          <p className="text-sm text-muted-foreground">andrew@example.com</p>
        </div>

        {/* Menu */}
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button key={item.label} className="flex w-full items-center gap-3 rounded-2xl px-3 py-3.5 transition-colors hover:bg-muted">
              <item.icon className={`h-5 w-5 ${item.color}`} />
              <span className="flex-1 text-left text-sm font-semibold text-foreground">{item.label}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>

        {/* Logout */}
        <button className="flex w-full items-center gap-3 rounded-2xl px-3 py-3.5 text-destructive transition-colors hover:bg-destructive/10">
          <LogOut className="h-5 w-5" />
          <span className="text-sm font-semibold">Logout</span>
        </button>
      </div>
    </MobileLayout>
  );
}
