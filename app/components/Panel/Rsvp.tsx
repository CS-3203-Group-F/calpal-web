"use client";

import React, { MouseEvent, useState, useEffect } from "react";
import { Section } from "./Section";
import { Check, Close, HandThumbsDown, HandThumbsUp } from "../Icons";

// FAKE DATA
const rsvps = [
  {
    id: "rsvp_group_f_1647652800000",
    group: "Group F",
    description: "CalPal planning",
    startTime: "2024-03-18T15:00:00",
    endTime: "2024-03-18T17:00:00",
  },
  {
    id: "rsvp_group_f_1647660000000",
    group: "Group F",
    description: "CalPal planning part 2",
    startTime: "2024-03-18T18:00:00",
    endTime: "2024-03-18T20:00:00",
  },
  {
    id: "rsvp_fortnite_squad_1647667200000",
    group: "fortnite squad",
    description: "Another day, another victory for the OGs",
    startTime: "2024-03-18T21:00:00",
    endTime: "2024-03-18T23:00:00",
  },
  {
    id: "rsvp_linear-algebra_1647674400000",
    group: "Linear Algebra",
    description: "Midterm study sesh",
    startTime: "2024-03-19T19:00:00",
    endTime: "2024-03-19T22:00:00",
  },
  {
    id: "rsvp_fortnite_squad_1647681600000",
    group: "fortnite squad",
    description: "More battle royales",
    startTime: "2024-03-20T11:00:00",
    endTime: "2024-03-20T16:00:00",
  },
  {
    id: "rsvp_comp_org_1647692400000",
    group: "Comp Org",
    description: "Homework day",
    startTime: "2024-03-21T09:00:00",
    endTime: "2024-03-21T18:00:00",
  },
  {
    id: "rsvp_fortnite_squad_1647222200000",
    group: "fortnite squad",
    description: "fornite party",
    startTime: "2024-03-20T12:00:00",
    endTime: "2024-03-20T13:00:00",
  },
];

// Fix time formatting later
function formatDateTimeRange(startTimeStr: string, endTimeStr: string) {
  const startTime = new Date(startTimeStr);
  const endTime = new Date(endTimeStr);

  // Format day of the week and time
  const formatter = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const startTimeFormatted = formatter.format(startTime);
  const endTimeFormatted = formatter.format(endTime);

  // Construct the output string
  const outputString = `${startTimeFormatted}-${endTimeFormatted}`;

  return outputString;
}

// COMPONENT TREE LOOKS SOMETHING LIKE THIS (Parents are on the outside of the braces)
// Rsvp[Rsvp pill, Rsvp stack[Rsvp card]]

export const Rsvp = () => {
  // Here, we would get in data from database in the form of an object array
  const data = rsvps;

  // Here, the state is an array of the rsvps
  const [cards, setcards] = useState(data);

  // When RsvpStack changes, update cards state so that the cards "react" to the change by animating
  function handleChange(result: any) {
    setcards(result);
  }

  return (
    <Section title="RSVP" pill={<RsvpPill count={cards.length} />}>
      <RsvpStack rsvps={rsvps} onChange={handleChange} items={cards} />
    </Section>
  );
};

interface RsvpStackProps {
  rsvps: any;
  items: Array<object>;
  onChange: any;
}

export const RsvpStack = (props: RsvpStackProps) => {
  // Using conditional rendering, we have to unmount rsvp card from the dom so that rsvp stack rerenders correctly

  // The card removes itself via this function, which is passed down to it via props
  const removeItem = (id: any) => {
    const change = props.items.filter((card: any) => card.id !== id);
    props.onChange(change); // When the card stack is changed, call the onChange function passed down by parent (Rsvp)
  };

  // For every object in the props.items array, map it and its properties to a rsvp card component
  const cardStack = props.items.map((card: any, index: number) => (
    <RsvpCard
      key={card.id}
      id={card.id}
      group={card.group}
      description={card.description}
      time={formatDateTimeRange(card.startTime, card.endTime)}
      position={index}
      removeSelf={() => removeItem(card.id)}
    />
  ));

  // Return JSX with updated cardStack
  return (
    <div className="relative w-full h-36">
      <p className="absolute text-stone-400 top-1/2 w-full text-center">
        {"You're all set!"}
      </p>
      {cardStack}
    </div>
  );
};

interface RsvpCardProps {
  id: string;
  group: string;
  description: string;
  time: string;
  position: number;
  removeSelf: any;
}

export const RsvpCard = (props: RsvpCardProps) => {
  const [accepted, setAccepted] = useState<boolean>(false);
  const [declined, setDeclined] = useState<boolean>(false);
  const [slide, setSlide] = useState(""); // The card slides off screen when the rsvp is accepted or declined
  const [active, setActive] = useState(true);

  //Change this to edit flashcard effect
  let cardTransform = ""; // Defines styling for the cards, which is what makes the flashcard effect
  switch (props.position) {
    case 0: // The topmost card, which is visible
      cardTransform = "scale-1 z-[3]";
      break;
    case 1: // Middle card
      cardTransform = "scale-[.95] z-[2] translate-y-3";
      break;
    case 2: // Last card
      cardTransform = "scale-[.90] z-[1] translate-y-6";
      break;
    default: // For when there are more than 3 rsvps
      cardTransform = "scale-[.85] z-[0] translate-y-3";
      break;
  }

  // When the user accepts the rsvp, put the effects of that in here
  const handleAccept = () => {
    setAccepted(true);
  };

  // When the user declines the rsvp, put the effects of that in here
  const handleDecline = () => {
    setDeclined(true);
  };

  // This is for the transition only
  const handleTransitionEnd = () => {
    setTimeout(() => {
      setSlide(`-translate-x-96`);
      setTimeout(() => {
        setActive(false);
        props.removeSelf(); // Card is removed from the DOM after the transition ends
      }, 100);
    }, 150);
  };

  if (active)
    return (
      <div
        className={`absolute transition-all duration-200 w-full ${cardTransform} ${slide}`}
      >
        <div
          className={`relative overflow-hidden rounded-lg bg-stone-50 border border-stone-200  `}
        >
          <div
            className={`flex flex-col justify-between items-start gap-2 self-stretch p-4 h-32 rounded-lg`}
          >
            <div>
              <h3>{props.group}</h3>
              <p className="text-sm text-stone-500">{props.description}</p>
            </div>
            <div className="flex flex-row justify-between w-full">
              <p className="text-sm text-stone-500">{props.time}</p>
              <div className="flex flex-row gap-4">
                <div onClick={handleAccept}>
                  <HandThumbsUp />
                </div>
                <div onClick={handleDecline}>
                  <HandThumbsDown />
                </div>
              </div>
            </div>
          </div>

          {/* The divs below only show when the rsvp is accepted or declined */}

          <div
            className={`absolute top-0 left-0 w-full h-full bg-lime-500 flex flex-col justify-center items-center transition-opacity duration-200 ${
              accepted ? `opacity-100` : `pointer-events-none opacity-0`
            }`}
            onTransitionEnd={handleTransitionEnd}
          >
            <div className="flex flex-row gap-2">
              <p className="font-semibold text-white">Added to calendar</p>
              <Check color="#FFF" />
            </div>
          </div>

          <div
            className={`absolute top-0 left-0 w-full h-full bg-red-500 flex flex-col justify-center items-center transition-opacity duration-200 ${
              declined ? `opacity-100` : `pointer-events-none opacity-0`
            }`}
            onTransitionEnd={handleTransitionEnd}
          >
            <div className="flex flex-row gap-2">
              <p className="font-semibold text-white">Declined</p>
              <Close color="#FFF" />
            </div>
          </div>
        </div>
      </div>
    );
  return <></>;
};

interface RsvpPillProps {
  count: number;
}

export const RsvpPill = (props: RsvpPillProps) => {
  return (
    <div className="flex px-2 py-1 rounded-full bg-stone-200 items-center gap-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <mask
          id="mask0_600_1896"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="12"
          height="12"
        >
          <rect width="12" height="12" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_600_1896)">
          <path
            d="M5.9999 10.8C5.41657 10.8 4.87018 10.6892 4.36074 10.4675C3.85129 10.2458 3.40796 9.94639 3.03074 9.56916C2.65351 9.19195 2.35407 8.74861 2.1324 8.23916C1.91074 7.72972 1.7999 7.18333 1.7999 6.6C1.7999 6.01667 1.91074 5.47028 2.1324 4.96084C2.35407 4.45139 2.65351 4.00805 3.03074 3.63084C3.40796 3.25361 3.85129 2.95417 4.36074 2.7325C4.87018 2.51083 5.41657 2.4 5.9999 2.4C6.58324 2.4 7.12962 2.51083 7.63907 2.7325C8.14852 2.95417 8.59185 3.25361 8.96907 3.63084C9.34629 4.00805 9.64574 4.45139 9.8674 4.96084C10.0891 5.47028 10.1999 6.01667 10.1999 6.6C10.1999 7.18333 10.0891 7.72972 9.8674 8.23916C9.64574 8.74861 9.34629 9.19195 8.96907 9.56916C8.59185 9.94639 8.14852 10.2458 7.63907 10.4675C7.12962 10.6892 6.58324 10.8 5.9999 10.8ZM7.2499 8.3L7.8874 7.6625L6.4499 6.225V4.2H5.5499V6.6L7.2499 8.3ZM2.9624 1.4375L3.5999 2.075L1.4749 4.2L0.837402 3.5625L2.9624 1.4375ZM9.0374 1.4375L11.1624 3.5625L10.5249 4.2L8.3999 2.075L9.0374 1.4375Z"
            fill="#57534E"
          />
        </g>
      </svg>
      <p className="text-[10px] font-medium text-stone-600">{`${props.count} pending`}</p>
    </div>
  );
};
