import Link from "next/link"; // Importing the Link component from Next.js

export default function Calendar() {
  // Defining the Calendar component
  return (
    <div className="flex flex-col items-center self-stretch p-6 gap-8">
      {/* Div container with flex layout */}
      {/* Link to the Calendar page */}
      <Link
        href="/Calendar" // Path to the Calendar page
        className="flex flex-row items-center justify-between p-4 bg-stone-50 rounded-lg hover:bg-stone-200 cursor-pointer" // Styling for the link
      >
        Calendar {/* Link text */}
      </Link>
      {/* Link to the Airlock page */}
      <Link
        href="/Airlock" // Path to the Airlock page
        className="flex flex-row items-center justify-between p-4 bg-stone-50 rounded-lg hover:bg-stone-200 cursor-pointer" // Styling for the link
      >
        Landing Page {/* Link text */}
      </Link>
    </div>
  );
}
