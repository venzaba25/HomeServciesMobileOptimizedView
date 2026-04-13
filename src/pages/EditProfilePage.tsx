import { ArrowLeft, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditProfilePage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "Venz Aba",
    nickname: "Venz",
    dob: "12/27/1995",
    email: "venzaba@gmail.com",
    phone: "+1 111 467 378 399",
    country: "United States",
    gender: "Male",
  });

  return (
    <div className="mx-auto flex min-h-screen max-w-md flex-col bg-background">
      <div className="flex items-center gap-3 p-4">
        <button onClick={() => navigate(-1)} className="rounded-full p-1 hover:bg-muted">
          <ArrowLeft className="h-6 w-6 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Edit Profile</h1>
      </div>

      <div className="flex-1 px-6">
        <div className="mb-6 flex justify-center">
          <div className="relative">
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">VA</div>
            <button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <Camera className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {Object.entries(form).map(([key, value]) => (
            <input
              key={key}
              type="text"
              value={value}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
              className="w-full rounded-xl bg-muted px-4 py-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        <button
          onClick={() => navigate(-1)}
          className="w-full rounded-full bg-primary py-4 text-base font-bold text-primary-foreground shadow-lg"
        >
          Update
        </button>
      </div>
    </div>
  );
}
