import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";
import { Search, Phone } from "lucide-react";

const chatList = [
  { id: 1, name: "Ma. Luz Maca", message: "I have booked your house...", time: "13:29", unread: 2 },
  { id: 2, name: "Alfonso Schuessler", message: "I just finished it 🔥🔥", time: "09:48", unread: 0 },
  { id: 3, name: "Benny Spanbauer", message: "omg, this is amazing 🔥🔥🔥", time: "09:23", unread: 0 },
  { id: 4, name: "Marci Senter", message: "Wow, this is really epic 🔥🔥", time: "Yesterday", unread: 0 },
  { id: 5, name: "Kylee Danford", message: "just ideas for next time 🔥🔥🔥", time: "Dec 20, 2024", unread: 0 },
  { id: 6, name: "Merrill Kervin", message: "How are you 👋😊", time: "Dec 20, 2024", unread: 0 },
  { id: 7, name: "Pedro Huard", message: "perfect! 🔥🔥🔥", time: "Dec 18, 2024", unread: 0 },
  { id: 8, name: "Edgar Torrey", message: "Looking forward to it!", time: "Dec 18, 2024", unread: 0 },
];

const callList = [
  { name: "Lauralee Quintero", type: "Incoming", date: "Dec 19, 2024", color: "text-primary" },
  { name: "Tanner Stafford", type: "Outgoing", date: "Dec 17, 2024", color: "text-success" },
  { name: "Augustina Midgett", type: "Missed", date: "Nov 28, 2024", color: "text-destructive" },
  { name: "Geoffrey Mott", type: "Outgoing", date: "Nov 24, 2024", color: "text-success" },
  { name: "Rosella Ehrman", type: "Incoming", date: "Nov 16, 2024", color: "text-primary" },
  { name: "Thad Eddings", type: "Outgoing", date: "Oct 30, 2024", color: "text-success" },
  { name: "Daryl Nehls", type: "Incoming", date: "Oct 29, 2024", color: "text-primary" },
  { name: "Francene Vandyne", type: "Outgoing", date: "Oct 25, 2024", color: "text-success" },
];

export default function InboxPage() {
  const navigate = useNavigate();
  const [tab, setTab] = useState<"chats" | "calls">("chats");

  return (
    <MobileLayout>
      <div className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-foreground">Inbox</h1>
          <div className="flex gap-2">
            <button className="rounded-full p-2 hover:bg-muted"><Search className="h-5 w-5" /></button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border">
          <button
            onClick={() => setTab("chats")}
            className={`flex-1 border-b-2 pb-3 text-sm font-semibold ${
              tab === "chats" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
            }`}
          >
            Chats
          </button>
          <button
            onClick={() => setTab("calls")}
            className={`flex-1 border-b-2 pb-3 text-sm font-semibold ${
              tab === "calls" ? "border-primary text-primary" : "border-transparent text-muted-foreground"
            }`}
          >
            Calls
          </button>
        </div>

        {tab === "chats" && (
          <div className="space-y-1">
            {chatList.map((chat) => (
              <button
                key={chat.id}
                onClick={() => navigate(`/chat/${chat.id}`)}
                className="flex w-full items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-muted"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-bold text-secondary-foreground">
                  {chat.name[0]}
                </div>
                <div className="flex-1 min-w-0 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-foreground">{chat.name}</h3>
                    <span className="text-[10px] text-muted-foreground">{chat.time}</span>
                  </div>
                  <p className="truncate text-xs text-muted-foreground">{chat.message}</p>
                </div>
                {chat.unread > 0 && (
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {chat.unread}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {tab === "calls" && (
          <div className="space-y-1">
            {callList.map((call, i) => (
              <div key={i} className="flex items-center gap-3 rounded-2xl p-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-bold text-secondary-foreground">
                  {call.name[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-foreground">{call.name}</p>
                  <p className={`text-xs ${call.color}`}>● {call.type} | {call.date}</p>
                </div>
                <button className="rounded-full p-2 hover:bg-muted">
                  <Phone className="h-5 w-5 text-primary" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </MobileLayout>
  );
}
