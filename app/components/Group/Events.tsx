"use client";

import { useState } from "react";
import { ExpandLess, ExpandMore } from "../Icons";

interface EventsProps {
  events: any;
}

export function Events({ events }: EventsProps) {
  const [isOpen, setIsOpen] = useState(true);

  function handleDropdownOpen() {
    setIsOpen((curr) => !curr);
  }

  return (
    <div className="flex flex-col items-start self-stretch border-t border-stone-200">
      <EventsDropdown
        events={events}
        isOpen={isOpen}
        setIsOpen={handleDropdownOpen}
      />
      {isOpen && <EventsList events={events} />}
    </div>
  );
}

function EventsDropdown(props: {
  events: any;
  isOpen: boolean;
  setIsOpen: any;
}) {
  return (
    <div className="flex h-16 px-6 justify-between items-center self-stretch">
      <p>{props.events.length} upcoming events</p>
      <button onClick={props.setIsOpen}>
        {props.isOpen ? <ExpandLess /> : <ExpandMore />}
      </button>
    </div>
  );
}

function EventsList({ events }: EventsProps) {
  return (
    <div className="flex flex-col self-stretch">
      {events.map((event: any, i: number) => (
        <Event
          name={event.name}
          description={event.description}
          date={event.date}
          location={event.location}
          key={i}
        />
      ))}
    </div>
  );
}

function Event(props: {
  name: string;
  description: string;
  date: string;
  location: string;
}) {
  // Create a new Date object
  const date = new Date(props.date);

  // Array of month names
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

  // Extract month and day from the date object
  const month = monthNames[date.getMonth()];
  const day = date.getDate();

  // Form the simplified date string
  const simplifiedDate = `${month} ${day}`;

  const truncatedDescription =
    props.description.length > 30
      ? props.description.slice(0, 30) + "..."
      : props.description;

  return (
    <div className="flex px-6 py-4 justify-between items-center self-stretch cursor-pointer hover:bg-stone-200">
      <div className="flex flex-col items-start gap-2">
        <p className="text-sm font-bold">{simplifiedDate}</p>
        <p className="text-[13px] font-normal">{truncatedDescription}</p>
      </div>
      <div className="flex flex-col items-end gap-2">
        <p className="text-[13px] font-normal">1 Event</p>
        <p className="text-[13px] font-normal">Pending</p>
      </div>
    </div>
  );
}
