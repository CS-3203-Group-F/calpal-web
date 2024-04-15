"use client";

import React, { MouseEvent, useState, useEffect } from "react";
import { Section } from "./Section";

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
                  <AcceptButton />
                </div>
                <div onClick={handleDecline}>
                  <DeclineButton />
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="white"
              >
                <mask
                  id="mask0_587_3380"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="25"
                >
                  <rect y="0.5" width="24" height="24" />
                </mask>
                <g mask="url(#mask0_587_3380)">
                  <path
                    d="M9.54998 18.5L3.84998 12.8L5.27498 11.375L9.54998 15.65L18.725 6.47498L20.15 7.89998L9.54998 18.5Z"
                    fill="white"
                  />
                </g>
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="white"
              >
                <mask
                  id="mask0_587_3394"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="25"
                  height="25"
                >
                  <rect x="0.5" y="0.5" width="24" height="24" />
                </mask>
                <g mask="url(#mask0_587_3394)">
                  <path
                    d="M6.9 19.5L5.5 18.1L11.1 12.5L5.5 6.9L6.9 5.5L12.5 11.1L18.1 5.5L19.5 6.9L13.9 12.5L19.5 18.1L18.1 19.5L12.5 13.9L6.9 19.5Z"
                    fill="white"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    );
  return <></>;
};

function AcceptButton() {
  return (
    <svg
      className="cursor-pointer fill-stone-300 hover:fill-lime-500"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="22"
      viewBox="0 0 21 22"
    >
      <g clip-path="url(#clip0_538_280)">
        <path d="M0.492188 14.5782C0.492188 17.7325 2.55274 20.3887 5.04297 20.3887H8.15821C9.39844 21.043 10.9024 21.4239 12.582 21.4239H13.8906C15.0625 21.4239 16.0781 21.3555 16.752 21.1895C18.0606 20.8672 18.8809 19.959 18.8809 18.8067C18.8809 18.5625 18.8418 18.3477 18.7832 18.1329C19.4277 17.6446 19.7891 16.9317 19.7891 16.1504C19.7891 15.7696 19.711 15.3887 19.5742 15.086C20.0137 14.6368 20.2578 13.9825 20.2578 13.2989C20.2578 12.8594 20.1504 12.3907 19.9649 12.0489C20.2285 11.668 20.3848 11.1309 20.3848 10.5645C20.3848 9.1582 19.2813 8.04492 17.875 8.04492H14.3106C14.0957 8.04492 13.959 7.94727 13.959 7.76172C13.959 6.74609 15.5606 4.36328 15.5606 2.44922C15.5606 1.13086 14.6426 0.193359 13.3828 0.193359C12.4551 0.193359 11.8301 0.671875 11.2149 1.84375C10.0723 4.04102 8.70508 6.01367 6.47852 8.72852H4.69141C2.36719 8.72852 0.492188 11.3555 0.492188 14.5782ZM5.99024 14.5293C5.99024 12.4883 6.44922 11.1895 7.71875 9.48047C9.13477 7.58594 11.0977 5.32031 12.5137 2.50781C12.8652 1.79492 13.0996 1.63867 13.4414 1.63867C13.8418 1.63867 14.1152 1.92188 14.1152 2.44922C14.1152 3.97266 12.5137 6.27734 12.5137 7.76172C12.5137 8.83594 13.3926 9.49024 14.5156 9.49024H17.875C18.4805 9.49024 18.9395 9.94922 18.9395 10.5645C18.9395 11.0137 18.793 11.2969 18.4317 11.668C18.2559 11.8243 18.2363 12.0196 18.3828 12.2051C18.6856 12.6543 18.8125 12.9278 18.8125 13.2989C18.8125 13.7383 18.6074 14.1192 18.1777 14.4414C17.9434 14.627 17.8457 14.8711 17.9824 15.1641C18.2266 15.6036 18.3438 15.8086 18.3438 16.1504C18.3438 16.6485 18.0215 17.0293 17.3379 17.3809C17.1231 17.5079 17.0742 17.6836 17.1621 17.8887C17.3965 18.4746 17.4258 18.5625 17.4258 18.8067C17.4258 19.2559 17.0938 19.6172 16.4102 19.793C15.8535 19.9297 14.9649 19.9883 13.9004 19.9883H12.6895C8.66602 19.9883 5.99024 17.7032 5.99024 14.5293ZM1.9375 14.5782C1.9375 12.1465 3.2461 10.1738 4.69141 10.1738C4.97461 10.1738 5.25781 10.1738 5.54102 10.1738C4.84766 11.4825 4.54492 12.8496 4.54492 14.5C4.54492 16.2481 5.16992 17.7715 6.29297 18.9336C5.87305 18.9336 5.46289 18.9336 5.04297 18.9336C3.39258 18.9336 1.9375 16.9414 1.9375 14.5782Z" />
      </g>
      <defs>
        <clipPath id="clip0_538_280">
          <rect
            width="20.2539"
            height="21.8066"
            fill="white"
            transform="translate(0.492188 0.193359)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
function DeclineButton() {
  return (
    <svg
      className="cursor-pointer fill-stone-300 hover:fill-red-500"
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="22"
      viewBox="0 0 21 22"
    >
      <g clip-path="url(#clip0_538_284)">
        <path d="M20.6387 7.04883C20.6387 3.88477 18.5781 1.23828 16.0879 1.23828H12.9727C11.7324 0.583984 10.2285 0.193359 8.54882 0.193359H7.24023C6.06836 0.193359 5.05273 0.261719 4.3789 0.4375C3.07031 0.75 2.25 1.66797 2.25 2.82031C2.25 3.05469 2.28906 3.2793 2.34765 3.48438C1.70312 3.98242 1.3418 4.68555 1.3418 5.47656C1.3418 5.85742 1.41016 6.22852 1.55664 6.54102C1.11719 6.99024 0.863282 7.64453 0.863282 8.32813C0.863282 8.76758 0.980469 9.23633 1.16602 9.57813C0.902344 9.95898 0.746094 10.4961 0.746094 11.0528C0.746094 12.4688 1.84961 13.5821 3.25586 13.5821H6.82031C7.03515 13.5821 7.17187 13.6797 7.17187 13.8653C7.17187 14.8809 5.57031 17.2637 5.57031 19.1778C5.57031 20.4961 6.48828 21.4336 7.74804 21.4336C8.67578 21.4336 9.30078 20.9551 9.90625 19.7832C11.0586 17.5762 12.4258 15.6133 14.6523 12.8985H16.4395C18.7637 12.8985 20.6387 10.2715 20.6387 7.04883ZM15.1406 7.09766C15.1406 9.13867 14.6816 10.4375 13.4121 12.1465C11.9961 14.0313 10.0234 16.3067 8.61718 19.1192C8.25586 19.8223 8.03125 19.9883 7.68945 19.9883C7.28906 19.9883 7.01562 19.7051 7.01562 19.1778C7.01562 17.6446 8.61718 15.3399 8.61718 13.8653C8.61718 12.7911 7.73828 12.1368 6.61523 12.1368H3.25586C2.65039 12.1368 2.1914 11.6778 2.1914 11.0528C2.1914 10.6036 2.32812 10.3204 2.69921 9.95898C2.875 9.80274 2.89453 9.59766 2.74804 9.42188C2.44531 8.97266 2.30859 8.69922 2.30859 8.32813C2.30859 7.87891 2.52343 7.50781 2.95312 7.17578C3.1875 7 3.28515 6.75586 3.13867 6.46289C2.90429 6.02344 2.78711 5.81836 2.78711 5.47656C2.78711 4.97852 3.10937 4.58789 3.79297 4.23633C4.00781 4.11914 4.05664 3.94336 3.95898 3.72852C3.73437 3.15234 3.70507 3.06445 3.70507 2.82031C3.70507 2.37109 4.02734 2.00977 4.71093 1.83398C5.26757 1.6875 6.15625 1.62891 7.23047 1.62891H8.4414C12.4649 1.63867 15.1406 3.92383 15.1406 7.09766ZM19.1934 7.04883C19.1934 9.4707 17.8848 11.4532 16.4395 11.4532C16.1563 11.4532 15.8731 11.4532 15.5899 11.4532C16.2832 10.1348 16.5859 8.76758 16.5859 7.12695C16.5859 5.37891 15.9609 3.85547 14.8379 2.69336C15.2481 2.69336 15.668 2.69336 16.0879 2.69336C17.7383 2.69336 19.1934 4.67578 19.1934 7.04883Z" />
      </g>
      <defs>
        <clipPath id="clip0_538_284">
          <rect
            width="20.2539"
            height="21.2793"
            fill="white"
            transform="translate(0.746094 0.193359)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

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
