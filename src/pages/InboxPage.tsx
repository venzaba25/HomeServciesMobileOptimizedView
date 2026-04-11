import { MobileLayout } from "@/components/MobileLayout";

export default function InboxPage() {
  const chats = [
    { id: 1, name: "Jenny Wilson", message: "I'll be there at 10 AM", time: "2 min ago", unread: 2 },
    { id: 2, name: "Ralph Edwards", message: "The painting is completed!", time: "1 hr ago", unread: 0 },
    { id: 3, name: "Devon Lane", message: "Sure, I can fix that", time: "3 hrs ago", unread: 1 },
    { id: 4, name: "Cameron Williamson", message: "Thank you for your review!", time: "Yesterday", unread: 0 },
  ];

  return (
    <MobileLayout>
      <div className="space-y-4 p-4">
        <h1 className="text-xl font-bold text-foreground">Inbox</h1>
        <div className="space-y-1">
          {chats.map((chat) => (
            <button key={chat.id} className="flex w-full items-center gap-3 rounded-2xl p-3 transition-colors hover:bg-muted">
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
      </div>
    </MobileLayout>
  );
}
