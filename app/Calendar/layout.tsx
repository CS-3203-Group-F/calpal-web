// Importing necessary components and session verification function
import CalendarPanel from "@/components/Calendar/CalendarPanel"; // Importing CalendarPanel component
import { Panel } from "@/components/Panel/Panel"; // Importing Panel component
import { verifySession } from "../lib/dal"; // Importing session verification function

// Define CalendarLayout component
export default async function CalendarLayout({
  children, // Children components passed to CalendarLayout
}: {
  children: React.ReactNode; // Type definition for children prop
}) {
  await verifySession(); // Verify user session before rendering the component, redirect to login if not authenticated

  return (
    <main className="text-stone-800 flex h-screen flex-row items-center justify-between">
      <Panel>{children}</Panel>
      <CalendarPanel />
    </main>
  );
}
