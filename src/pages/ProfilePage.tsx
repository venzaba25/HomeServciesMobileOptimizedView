import { ChevronRight, Settings, CreditCard, HelpCircle, Shield, LogOut, Bell, Star, Globe, Lock, FileText, Users, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MobileLayout } from "@/components/MobileLayout";
import { useState } from "react";

const menuItems = [
  { icon: Edit, label: "Edit Profile", path: "/edit-profile", color: "text-primary" },
  { icon: Bell, label: "Notification", path: "/notification-settings", color: "text-primary" },
  { icon: CreditCard, label: "Payment", path: "/payment", color: "text-primary" },
  { icon: Shield, label: "Security", path: "/security", color: "text-success" },
  { icon: Globe, label: "Language", path: "/language", color: "text-primary", extra: "English (US)" },
  { icon: Lock, label: "Privacy Policy", path: "/privacy-policy", color: "text-primary" },
  { icon: HelpCircle, label: "Help Center", path: "/help-center", color: "text-warning" },
  { icon: Users, label: "Invite Friends", path: "/invite-friends", color: "text-primary" },
];

export default function ProfilePage() {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <MobileLayout>
      <div className="space-y-6 p-4">
        {/* Profile Header */}
        <div className="flex flex-col items-center pt-4">
          <div className="relative mb-3">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
              VA
            </div>
            <button className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Edit className="h-3.5 w-3.5" />
            </button>
          </div>
          <h1 className="text-xl font-bold text-foreground">Venz Aba</h1>
          <p className="text-sm text-muted-foreground">venzaba@gmail.com</p>
        </div>

        {/* Menu */}
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex w-full items-center gap-3 rounded-2xl px-3 py-3.5 transition-colors hover:bg-muted"
            >
              <item.icon className={`h-5 w-5 ${item.color}`} />
              <span className="flex-1 text-left text-sm font-semibold text-foreground">{item.label}</span>
              {item.extra && <span className="text-xs text-muted-foreground">{item.extra}</span>}
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>

        {/* Logout */}
        <button
          onClick={() => setShowLogout(true)}
          className="flex w-full items-center gap-3 rounded-2xl px-3 py-3.5 text-destructive transition-colors hover:bg-destructive/10"
        >
          <LogOut className="h-5 w-5" />
          <span className="text-sm font-semibold">Logout</span>
        </button>
      </div>

      {/* Logout Modal */}
      {showLogout && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-foreground/50">
          <div className="mx-auto w-full max-w-md rounded-t-3xl bg-background p-6">
            <h2 className="mb-2 text-center text-xl font-bold text-destructive">Logout</h2>
            <p className="mb-6 text-center text-sm text-muted-foreground">
              Are you sure you want to log out?
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 rounded-full bg-secondary py-3.5 text-sm font-bold text-primary"
              >
                Cancel
              </button>
              <button
                onClick={() => navigate("/welcome")}
                className="flex-1 rounded-full bg-primary py-3.5 text-sm font-bold text-primary-foreground"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </MobileLayout>
  );
}
