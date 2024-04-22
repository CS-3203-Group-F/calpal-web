"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { CalendarMonth, Add } from "../Icons";
import { useState, useRef, ReactNode } from "react";
import { CalendarHeader } from "./CalendarHeader";
import {
  Calendar,
  CalendarApi,
  CalendarOptions,
} from "@fullcalendar/core/index.js";
import { CalendarContentProps } from "@fullcalendar/core/internal";

const groupFDataExample = [
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
  {
    title: "New Event 1",
    description: "Description of new event 1.",
    location: "Location of new event 1",
    start: "2024-04-17T15:00:00.000Z",
    end: "2024-04-17T16:00:00.000Z",
    editable: true,
    classNames: [
      "bg-blue-200/50 border rounded-lg font-semibold border-blue-500",
    ],
    textColor: "#3B82F6",
  },
  {
    title: "New Event 2",
    description: "Description of new event 2.",
    location: "Location of new event 2",
    start: "2024-04-18T13:00:00.000Z",
    end: "2024-04-18T14:00:00.000Z",
    editable: true,
    classNames: [
      "bg-green-200/50 border rounded-lg font-semibold border-green-500",
    ],
    textColor: "#10B981",
  },
];

export default function CalendarPanel() {
  const [events, setEvents] = useState(groupFDataExample);
  const calendarRef = useRef<FullCalendar>(null);

  return (
    <div className="flex flex-col w-screen h-screen overflow-auto">
      <CalendarHeader
        calendarRef={calendarRef}
        events={events}
        setEvents={setEvents}
      />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        ref={calendarRef}
        initialView="dayGridMonth"
        events={events}
        eventClassNames={"border rounded font-semibold py-2 px-1 shadow"}
        height={"100%"}
        headerToolbar={false}
        nowIndicator={true}
        eventContent={renderEventContent}
      />
    </div>
  );
}

function renderEventContent(eventInfo: any) {
  return (
    <div className="flex flex-col h-full justify-between overflow-hidden">
      <p style={{ color: `${eventInfo.event.textColor}` }} className="">
        {eventInfo.event.title}
      </p>
      <p
        style={{ color: `${eventInfo.event.textColor}` }}
        className="font-normal text-xs"
      >
        {eventInfo.timeText}
      </p>
    </div>
  );
}
