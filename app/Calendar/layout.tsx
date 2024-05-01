import CalendarPanel from "@/components/Calendar/CalendarPanel";
import { Panel } from "@/components/Panel/Panel";
import { verifySession } from "../lib/dal";
import { deleteSession } from "../lib/session";

export default async function CalendarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await verifySession();

  return (
    <main className="text-stone-800 flex h-screen flex-row items-center justify-betweenS">
      <Panel>{children}</Panel>
      <CalendarPanel />
    </main>
  );
}
