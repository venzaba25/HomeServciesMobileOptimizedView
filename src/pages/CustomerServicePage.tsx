import { ArrowLeft, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MobileLayout } from "@/components/MobileLayout";

const initialMessages = [
  { from: "agent", text: "Hello, good morning 👋", time: "09:41" },
  { from: "agent", text: "I am a Customer Service, is there anything I can help you with? 😊", time: "09:41" },
  { from: "user", text: "Hi, I'm having problems with my service payment 😭", time: "09:41" },
  { from: "agent", text: "Can you help me?", time: "09:41" },
  { from: "agent", text: "Of course...", time: "09:41" },
  { from: "agent", text: "Can you tell me the problem you are having? So I can help solve it 🙂👍", time: "09:41" },
];

export default function CustomerServicePage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { from: "user", text: input, time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }]);
      setInput("");
    }
  };

  return (
    <MobileLayout hideNav>
      <div className="flex min-h-screen flex-col">
        <div className="flex items-center gap-3 border-b border-border p-4">
          <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
            <ArrowLeft className="h-6 w-6 text-foreground" />
          </button>
          <h1 className="flex-1 text-lg font-bold text-foreground">Customer Service</h1>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto p-4">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                msg.from === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-foreground"
              }`}>
                <p className="text-sm">{msg.text}</p>
                <p className={`mt-1 text-[10px] ${msg.from === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-border p-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
              placeholder="Message..."
              className="h-10 flex-1 rounded-xl border border-border bg-muted px-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <button
              onClick={sendMessage}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}
