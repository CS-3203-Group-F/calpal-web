"use client";

import { useState, useRef, ReactNode } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  CalendarMonth,
  CalendarViewMonth,
  CalendarViewWeek,
  Add,
  CalendarAddOn,
  Close,
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
  events: any;
  setEvents: any;
}) {
  const [currentView, setCurrentView] = useState("dayGridMonth");

  function handleChangeView() {
    const calendarApi = props.calendarRef.current!.getApi();
    const newView =
      currentView === "dayGridMonth" ? "timeGridWeek" : "dayGridMonth";
    setCurrentView(newView);
    calendarApi.changeView(newView);
  }

  function handleJumpToToday() {
    const calendarApi = props.calendarRef.current!.getApi();
    calendarApi.today();
  }

  return (
    <div className="flex flex-row w-full h-max justify-between items-center p-6">
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={handleChangeView}
          className="flex px-3 py-2 items-center rounded-lg bg-amber-400 hover:bg-amber-500"
        >
          {currentView === "dayGridMonth" ? (
            <CalendarViewWeek />
          ) : (
            <CalendarViewMonth />
          )}
        </button>
        <button onClick={handleJumpToToday}>
          <span className="font-semibold text-xl">{formattedDate}</span>
        </button>
      </div>
      <div className="flex flex-row gap-2">
        <FilterButton category="All" color="#000" />
        <FilterButton category="School" color="#F886A8" />
        <FilterButton category="Work" color="#DFDD6C" />
        <AddEventButton>
          <AddEventForm />
        </AddEventButton>
      </div>
    </div>
  );
}

// NEED TO ADD IN WEEK NAVIGATION (CHEVRON BUTTONS)

function FilterButton(props: { category: string; color: string }) {
  return (
    <button
      style={{ border: `2px solid ${props.color}` }}
      className="flex flex-row items-center px-3 py-2 gap-2 rounded-lg "
    >
      <span className="font-semibold text-base">{props.category}</span>
    </button>
  );
}

function AddEventButton(props: { children: any }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((curr) => !curr)}
        className="flex flex-row items-center px-3 py-2 gap-2 rounded-lg bg-amber-400 hover:bg-amber-500"
      >
        <Add />
        <span className="font-bold text-base">New event</span>
      </button>
      {open && props.children}
    </div>
  );
}

type FormData = {
  title: string;
  location: string;
  description: string;
  allDay: boolean;
  start: string;
  end: string;
  notes: string;
};

function AddEventForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  // Prints form data
  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div
      style={{ transform: "translateX(-45%)" }}
      className="flex flex-col items-center rounded-lg overflow-hidden absolute top-[58px] w-72 h-max bg-white shadow-lg z-50"
    >
      <AddEventFormHeader />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Title"
            {...register("title", { required: true })}
          />

          <input placeholder="Location (optional)" {...register("location")} />

          <input
            placeholder="Description (optional)"
            {...register("description")}
          />

          <label htmlFor="allDay">All-day?</label>
          <input id="allDay" type="checkbox" {...register("allDay")} />

          <label htmlFor="start">Choose a time for your appointment:</label>
          <input
            type="datetime-local"
            id="start"
            {...(register("start"), { required: true })}
          />

          <label htmlFor="end">Choose a time for your appointment:</label>
          <input type="datetime-local" id="end" {...register("end")} />

          <input placeholder="Notes (optional)" {...register("notes")} />

          <input type="submit" />
        </form>
      </div>
    </div>
  );
}

function AddEventFormInputs() {}

function AddEventFormHeader() {
  return (
    <div className="flex p-4 justify-between items-center self-stretch bg-stone-100">
      <div className="flex flex-row items-center gap-2">
        <CalendarAddOn />
        <p className="text-base font-bold">New event</p>
      </div>
      <button onClick={() => console.log("NEED TO ADD CLOSING FUNCTIONALITY")}>
        <Close />
      </button>
    </div>
  );
}

{
  /* <div className="flex flex-col gap-2">

</div> */
}
