"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./Calendar.css";

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={groupFDataExample}
    />
  );
}

const groupFDataExample = {
  events: [
    {
      title: "CalPal planning",
      description: "Planning session for the upcoming CalPal event.",
      location: "Devon Energy Hall 0270",
      start: "2024-04-17T10:00:00.000Z",
      end: "2024-04-19T12:00:00.000Z",
      color: "#B9B2D8",
    },
    {
      title: "CalPal planning",
      description: "Planning session for the upcoming CalPal event.",
      location: "Devon Energy Hall 0270",
      start: "2024-04-17T14:00:00.000Z",
      allDay: true,
    },
    {
      title: "Earnings Report",
      description: "Review and discussion of quarterly earnings report.",
      location: "CalPal Business Park Building 3, Room 2100",
      start: "2024-04-17T09:00:00.000Z",
      end: "2024-04-17T11:00:00.000Z",
    },
    {
      title: "Bonding trip",
      description: "Group bonding trip for members of Group F.",
      date: "2024-04-18T09:00:00",
      location: "Phoenix, Arizona",
      start: "2024-04-18T09:00:00.000Z",
      endendime: "2024-04-20T17:00:00.000Z",
    },
  ],
};

// export function Calendar() {
//   return <div className="w-full"></div>;
// }

// Will use big calendar library
