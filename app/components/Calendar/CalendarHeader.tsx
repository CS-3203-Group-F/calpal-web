import { useState, useRef } from "react";
import {
  CalendarMonth,
  CalendarViewMonth,
  CalendarViewWeek,
  Add,
} from "../Icons";
import FullCalendar from "@fullcalendar/react";

// Create a new Date object
const currentDate = new Date();

// Define arrays for month names and month abbreviations
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Extract the month, day, and year
const month = monthNames[currentDate.getMonth()];
const day = currentDate.getDate();
const year = currentDate.getFullYear();

// Display the date in the desired format
const formattedDate = month + " " + day + ", " + year;

export function CalendarHeader(props: {
  calendarRef: React.RefObject<FullCalendar>;
}) {
  const [currentView, setCurrentView] = useState("dayGridMonth");

  function changeView() {
    const calendarApi = props.calendarRef.current!.getApi();
    const newView =
      currentView === "dayGridMonth" ? "timeGridWeek" : "dayGridMonth";
    setCurrentView(newView);
    calendarApi.changeView(newView);
  }

  return (
    <div className="flex flex-row w-full h-max justify-between items-center p-6">
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={changeView}
          className="flex px-3 py-2 items-center rounded-lg bg-amber-400"
        >
          {currentView === "dayGridMonth" ? (
            <CalendarViewWeek />
          ) : (
            <CalendarViewMonth />
          )}
        </button>
        <span className="font-semibold text-xl">{formattedDate}</span>
      </div>
      <div className="flex flex-row gap-2">
        <FilterButton category="All" color="#000" />
        <FilterButton category="School" color="#F886A8" />
        <FilterButton category="Work" color="#DFDD6C" />
        <AddEventButton />
      </div>
    </div>
  );
}

function FilterButton(props: { category: string; color: string }) {
  return (
    <button
      style={{ border: `2px solid ${props.color}` }}
      className="flex flex-row px-3 py-2 gap-2 rounded-lg"
    >
      <span className="font-semibold text-base">{props.category}</span>
    </button>
  );
}

function AddEventButton() {
  return (
    <button className="flex flex-row items-center px-3 py-2 gap-2 rounded-lg bg-amber-400">
      <Add />
      <span className="font-bold text-base">New event</span>
    </button>
  );
}
