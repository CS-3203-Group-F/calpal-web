import Link from "next/link";

export default function Calendar() {
  return (
    <div className="flex flex-col items-center self-stretch p-6 gap-8">
      <Link
        href="/Calendar"
        className="flex flex-row items-center justify-between p-4 bg-stone-50 rounded-lg hover:bg-stone-200 cursor-pointer"
      >
        Calendar
      </Link>
      <Link
        href="/Airlock"
        className="flex flex-row items-center justify-between p-4 bg-stone-50 rounded-lg hover:bg-stone-200 cursor-pointer"
      >
        Landing Page
      </Link>
    </div>
  );
}
