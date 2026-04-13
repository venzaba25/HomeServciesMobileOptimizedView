import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const notifications = [
  { section: "Today", items: [
    { icon: "💜", title: "Payment Successful!", desc: "You have made a services payment", time: "" },
    { icon: "🏠", title: "New Category Services!", desc: "Now the plumbing service is available", time: "" },
  ]},
  { section: "Yesterday", items: [
    { icon: "🎉", title: "Today's Special Offers", desc: "You get a special promo today!", time: "" },
  ]},
  { section: "December 22, 2024", items: [
    { icon: "💳", title: "Credit Card Connected!", desc: "Credit Card has been linked!", time: "" },
    { icon: "✅", title: "Account Setup Successful!", desc: "Your account has been created!", time: "" },
  ]},
];

export default function NotificationsPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Notification</h1>
      </div>

      <div className="flex-1 px-6">
        {notifications.map((section) => (
          <div key={section.section} className="mb-6">
            <p className="mb-3 text-sm font-bold text-foreground">{section.section}</p>
            <div className="space-y-3">
              {section.items.map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl bg-card p-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
