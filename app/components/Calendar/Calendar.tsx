"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./Calendar.css";

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="timeGridWeek"
      events={groupFDataExample}
      eventClassNames={"border rounded font-semibold py-2 px-1"}
      headerToolbar={{
        start: "title",
        center: "",
        end: "filterSchool filterGym filterWork today prev,next",
      }}
      nowIndicator={true}
      customButtons={{
        filterSchool: {
          text: "School",
        },
        filterGym: {
          text: "Gym",
        },
        filterWork: {
          text: "Work",
        },
      }}
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
      end: "2024-04-17T12:00:00.000Z",
      editable: true,
      classNames: [
        "bg-yellow-200/50 border rounded-lg font-semibold border-yellow-500",
      ],
      textColor: "#713F12",
    },
    {
      title: "CalPal planning",
      description: "Planning session for the upcoming CalPal event.",
      location: "Devon Energy Hall 0270",
      start: "2024-04-17T14:00:00.000Z",
      allDay: true,
      editable: true,
      classNames: [
        "bg-cyan-200/50 border rounded-lg font-semibold border-cyan-500",
      ],
      textColor: "#06B6D4",
    },
    {
      title: "Earnings Report",
      description: "Review and discussion of quarterly earnings report.",
      location: "CalPal Business Park Building 3, Room 2100",
      start: "2024-04-17T09:00:00.000Z",
      end: "2024-04-17T11:00:00.000Z",
      editable: true,
      classNames: [
        "bg-pink-200/50 border rounded-lg font-semibold border-pink-500",
      ],
      textColor: "#831843",
    },
    {
      title: "Bonding trip",
      description: "Group bonding trip for members of Group F.",
      date: "2024-04-18T09:00:00",
      location: "Phoenix, Arizona",
      start: "2024-04-18T09:00:00.000Z",
      end: "2024-04-18T17:00:00.000Z",
      editable: true,
      classNames: [
        "bg-red-200/50 border rounded-lg font-semibold border-red-500",
      ],
      textColor: "#EF4444",
    },
  ],
};

// export function Calendar() {
//   return <div className="w-full"></div>;
// }

// Will use big calendar library
