import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const friends = [
  { name: "Tynisha Obey", phone: "+1-300-555-035", invited: false },
  { name: "Florencia Dorrance", phone: "+1-202-555-006", invited: false },
  { name: "Chantal Shelburne", phone: "+1-300-555-019", invited: false },
  { name: "Maryland Winkles", phone: "+1-300-555-080", invited: false },
  { name: "Rodolfo Goode", phone: "+1-300-555-006", invited: false },
  { name: "Benny Spanbauer", phone: "+1-202-555-067", invited: false },
  { name: "Tyra Dhillon", phone: "+1-202-555-019", invited: false },
  { name: "Jamel Eusebio", phone: "+1-300-555-071", invited: false },
  { name: "Pedro Huard", phone: "+1-202-555-071", invited: false },
  { name: "Clinton Mcclure", phone: "+1-300-555-019", invited: false },
];

export default function InviteFriendsPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Invite Friends</h1>
      </div>

      <div className="flex-1 px-6">
        <div className="space-y-1">
          {friends.map((friend, i) => (
            <div key={i} className="flex items-center gap-3 py-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-lg font-bold text-secondary-foreground">
                {friend.name[0]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-foreground">{friend.name}</p>
                <p className="text-xs text-muted-foreground">{friend.phone}</p>
              </div>
              <button className="rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                Invite
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
