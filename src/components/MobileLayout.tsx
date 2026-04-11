import { BottomNav } from "./BottomNav";

export function MobileLayout({ children, hideNav = false }: { children: React.ReactNode; hideNav?: boolean }) {
  return (
    <div className="mx-auto min-h-screen max-w-md bg-background">
      <div className={hideNav ? "" : "pb-20"}>{children}</div>
      {!hideNav && <BottomNav />}
    </div>
  );
}
