import CalendarPanel from "../components/Calendar/CalendarPanel";
import { Panel } from "../components/Panel/Panel";

export default function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="text-stone-800 flex h-screen flex-row items-center justify-betweenS">
      <Panel>{children}</Panel>
      <CalendarPanel />
    </main>
  );
}
