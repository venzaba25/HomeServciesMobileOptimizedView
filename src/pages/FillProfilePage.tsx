import { ArrowLeft, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function FillProfilePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "", nickname: "", dob: "", email: "", phone: "", gender: "",
  });

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Fill Your Profile</h1>
      </div>

      <div className="flex-1 px-6">
        {/* Avatar */}
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-muted text-4xl">👤</div>
            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Camera className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { key: "fullName", placeholder: "Full Name", type: "text" },
            { key: "nickname", placeholder: "Nickname", type: "text" },
            { key: "dob", placeholder: "Date of Birth", type: "date" },
            { key: "email", placeholder: "Email", type: "email" },
            { key: "phone", placeholder: "Phone Number", type: "tel" },
          ].map((field) => (
            <input
              key={field.key}
              type={field.type}
              placeholder={field.placeholder}
              value={form[field.key as keyof typeof form]}
              onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
              className="w-full rounded-xl bg-muted px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          ))}

          <select
            value={form.gender}
            onChange={(e) => setForm({ ...form, gender: e.target.value })}
            className="w-full rounded-xl bg-muted px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={() => navigate("/create-pin")}
          className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
