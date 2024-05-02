// Importing necessary components and session verification function
import CalendarPanel from "@/components/Calendar/CalendarPanel"; // Importing CalendarPanel component
import { Panel } from "@/components/Panel/Panel"; // Importing Panel component
import { verifySession } from "../lib/dal"; // Importing session verification function

const userId = 3;

async function getData() {
  try {
    const eventIdArray = await (
      await fetch(`http://35.233.194.137/events/${userId}`)
    ).json();

    const eventPromises = eventIdArray.map((eventId: number) =>
      fetch(`http://35.233.194.137/event/${eventId}`).then((res) => res.json())
    );

    const dataArray = await Promise.all(eventPromises);

    const updatedEvents = dataArray.map((data) => ({
      ...data,
      id: data.title,
      editable: true,
      backgroundColor: `${data.color}20`,
      textColor: `${data.color}`,
      borderColor: `${data.color}`,
      display: "block",
    }));

    return updatedEvents;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}

// Define CalendarLayout component
export default async function CalendarLayout({
  children, // Children components passed to CalendarLayout
}: {
  children: React.ReactNode; // Type definition for children prop
}) {
  await verifySession(); // Verify user session before rendering the component, redirect to login if not authenticated
  const eventData = await getData();

  return (
    <main className="text-stone-800 flex h-screen flex-row items-center justify-betweenS">
      <Panel>{children}</Panel>
      <CalendarPanel eventData={eventData} />
    </main>
  );
}
