import { ArrowLeft, Search, ChevronDown, MessageSquare, Globe, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const categories = ["General", "Account", "Service", "Payment"];

const faqs = [
  { q: "What is Hamo?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
  { q: "How to use Hamo?", a: "You can browse services, select a provider, and book their services through the app." },
  { q: "How do I cancel a booking?", a: "Go to My Bookings, select the booking you want to cancel, and tap Cancel." },
  { q: "Is Hamo free to use?", a: "Yes, the app is free to download and use. You only pay for the services you book." },
  { q: "How to make offer on Hamo?", a: "You can negotiate prices with providers through the messaging feature." },
];

const contactOptions = [
  { icon: "💬", label: "Customer Service" },
  { icon: "💬", label: "WhatsApp" },
  { icon: "🌐", label: "Website" },
  { icon: "📘", label: "Facebook" },
  { icon: "🐦", label: "Twitter" },
  { icon: "📷", label: "Instagram" },
];

export default function HelpCenterPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"faq" | "contact">("faq");
  const [activeCategory, setActiveCategory] = useState("General");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Help Center</h1>
      </div>

      <div className="px-6">
        {/* Tabs */}
        <div className="mb-4 flex">
          <button
            onClick={() => setTab("faq")}
            className={`flex-1 border-b-2 pb-3 text-sm font-semibold ${
              tab === "faq" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => setTab("contact")}
            className={`flex-1 border-b-2 pb-3 text-sm font-semibold ${
              tab === "contact" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
            }`}
          >
            Contact us
          </button>
        </div>

        {tab === "faq" && (
          <>
            <div className="mb-4 flex gap-2 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold ${
                    activeCategory === cat
                      ? "bg-primary text-primary-foreground"
                      : "border border-primary text-primary"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative mb-4">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded-xl bg-muted py-3 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>

            <div className="space-y-2">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-border">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-4"
                  >
                    <span className="text-sm font-semibold text-foreground">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 text-primary transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  {openFaq === i && (
                    <div className="border-t border-border px-4 pb-4 pt-2">
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {tab === "contact" && (
          <div className="space-y-3">
            {contactOptions.map((opt, i) => (
              <button
                key={i}
                onClick={() => opt.label === "Customer Service" && navigate("/customer-service")}
                className="flex w-full items-center gap-4 rounded-2xl border border-border p-4 hover:bg-muted"
              >
                <span className="text-2xl">{opt.icon}</span>
                <span className="text-sm font-semibold text-foreground">{opt.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
