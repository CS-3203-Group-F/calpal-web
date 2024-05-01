"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  CalendarMonth,
  CalendarViewMonth,
  CalendarViewWeek,
  Add,
  CalendarAddOn,
  Close,
  ChevronLeft,
  ChevronRight,
} from "../Icons";
import FullCalendar from "@fullcalendar/react";
import Settings from "../Settings/Settings";

export function formatDate(input: string) {
  // Create a new Date object
  let currentDate = input ? new Date(input) : new Date();

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

  return formattedDate;
}

export function CalendarHeader(props: {
  calendarRef: React.RefObject<FullCalendar>;
  events: any;
  setEvents: any;
}) {
  const [currentView, setCurrentView] = useState("dayGridMonth");
  const formattedDate = formatDate("");

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

  function handleJumpNext() {
    const calendarApi = props.calendarRef.current!.getApi();
    calendarApi.next();
  }

  function handleJumpPrev() {
    const calendarApi = props.calendarRef.current!.getApi();
    calendarApi.prev();
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
        <button
          onClick={handleJumpPrev}
          className="hover:-translate-x-0.5 transition-transform"
        >
          <ChevronLeft />
        </button>
        <button onClick={handleJumpToToday}>
          <span className="font-semibold text-xl" suppressHydrationWarning>
            {formattedDate}
          </span>
        </button>
        <button
          onClick={handleJumpNext}
          className="hover:translate-x-0.5 transition-transform"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="flex flex-row gap-2">
        <FilterButton category="All" color="#000" />
        <FilterButton category="School" color="#F886A8" />
        <FilterButton category="Work" color="#DFDD6C" />
        <AddEventButton setEvents={props.setEvents} />
        <Settings />
      </div>
    </div>
  );
}

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

function AddEventButton(props: { setEvents: any }) {
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
      {open && <AddEventForm setEvents={props.setEvents} setOpen={setOpen} />}
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

function AddEventForm(props: { setEvents: any; setOpen: any }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const [minEndDate, setMinEndDate] = useState("");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // Get the current timestamp
    const timestamp = Date.now();

    const eventNameWithoutSpaces = data.title.replace(/\s+/g, "");

    // Combine timestamp with event name to create the ID
    const eventId = `${eventNameWithoutSpaces}-${timestamp}`;

    // Adds in classes and interactivity into events
    const newEvent = {
      ...data,
      id: eventId,
      editable: true,
      classNames: [
        "bg-blue-200/50 border rounded-lg font-semibold border-blue-500",
      ],
      textColor: "#3B82F6",
    };

    // Updates event state, which updates the calendar
    props.setEvents((curr: any) => [...curr, newEvent]);

    // Closes the new event modal
    props.setOpen(false);
  };

  // Minimum length of an event is 5 minutes
  function handleMinEndDate(data: any) {
    console.log(data);

    // Convert the time string to a Date object
    const inputStartTime = new Date(data);

    // Add 5 minutes to the current time
    inputStartTime.setMinutes(inputStartTime.getMinutes() + 5);

    inputStartTime.setTime(
      inputStartTime.getTime() - inputStartTime.getTimezoneOffset() * 60 * 1000
    );

    // Format the new time as a string
    const newMinTime = inputStartTime.toISOString().slice(0, 16);

    console.log(newMinTime);
    setMinEndDate(newMinTime);
  }

  return (
    <div
      style={{ transform: "translateX(-45%)" }}
      className="flex flex-col items-center rounded-lg overflow-hidden absolute top-[58px] w-72 h-max bg-white shadow-lg z-50"
    >
      <AddEventFormHeader setOpen={props.setOpen} />
      <div>
        <form
          className="flex flex-col items-center gap-4 self-stretch p-6"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="flex py-3 px-4 gap-2 items-center self-stretch rounded-lg border border-stone-200"
            placeholder="Title"
            {...register("title", { required: true })}
          />

          <input
            className="flex py-3 px-4 gap-2 items-center self-stretch rounded-lg border border-stone-200"
            placeholder="Location (optional)"
            {...register("location")}
          />

          <input
            className="flex py-3 px-4 gap-2 items-center self-stretch rounded-lg border border-stone-200"
            placeholder="Description (optional)"
            {...register("description")}
          />

          <div className="flex flex-row justify-between items-center self-stretch">
            <label htmlFor="allDay">All-day?</label>
            <input id="allDay" type="checkbox" {...register("allDay")} />
          </div>

          <div>
            <label htmlFor="start">Start date</label>
            <input
              className="flex py-3 px-4 gap-2 items-center self-stretch rounded-lg border border-stone-200"
              type="datetime-local"
              id="start"
              {...register("start", {
                required: true,
                onChange: (e) => handleMinEndDate(e.target.value),
              })}
            />
          </div>

          <div>
            <label htmlFor="end">End date</label>
            <input
              className="flex py-3 px-4 gap-2 items-center self-stretch rounded-lg border border-stone-200"
              type="datetime-local"
              id="end"
              min={minEndDate}
              {...register("end")}
            />
          </div>

          <input
            className="flex py-3 px-4 gap-2 items-center self-stretch rounded-lg border border-stone-200"
            placeholder="Notes (optional)"
            {...register("notes")}
          />

          <button className="flex py-4 px-6 justify-center items-center gap-2 self-stretch rounded-lg bg-amber-400">
            <span className="font-bold text-base">Create</span>
          </button>
        </form>
      </div>
    </div>
  );
}

function AddEventFormHeader(props: { setOpen: any }) {
  return (
    <div className="flex p-4 justify-between items-center self-stretch bg-stone-100">
      <div className="flex flex-row items-center gap-2">
        <CalendarAddOn />
        <p className="text-base font-bold">New event</p>
      </div>
      <button onClick={() => props.setOpen(false)}>
        <Close />
      </button>
    </div>
  );
}

{
  /* <div className="flex flex-col gap-2">

</div> */
}
