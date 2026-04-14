import { ArrowLeft, Send, Phone, Video } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const chatMessages = [
  { id: 1, sender: "me", text: "Hi Jenny, good morning 👋", time: "10:00" },
  { id: 2, sender: "me", text: "I have booked your house cleaning service for December 23 at 10 AM 😊", time: "10:00" },
  { id: 3, sender: "other", text: "Hi, morning too Andrew!", time: "10:00" },
  { id: 4, sender: "other", text: "Yes, I have received your order. I will come on time at the appointed date. Thank you for using my service 😊👍", time: "10:00" },
  { id: 5, sender: "me", text: "You're welcome. I look forward to welcoming you to my house 🏠", time: "10:00" },
];

export default function ChatDetailPage() {
  const navigate = useNavigate();
  const { chatId } = useParams();
  const [message, setMessage] = useState("");

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-border p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <div className="flex-1">
          <h1 className="text-base font-bold text-foreground">Ma. Luz Maca</h1>
        </div>
        <button onClick={() => navigate("/voice-call")} className="rounded-full p-2 hover:bg-muted">
          <Phone className="h-5 w-5 text-foreground" />
        </button>
        <button className="rounded-full p-2 hover:bg-muted">
          <Video className="h-5 w-5 text-foreground" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-3 overflow-y-auto p-4">
        <div className="text-center">
          <span className="rounded-full bg-muted px-3 py-1 text-[10px] text-muted-foreground">Today</span>
        </div>

        {chatMessages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                msg.sender === "me"
                  ? "rounded-br-sm bg-primary text-primary-foreground"
                  : "rounded-bl-sm bg-muted text-foreground"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <p className={`mt-1 text-[10px] ${msg.sender === "me" ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message..."
            className="flex-1 rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          <button className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
