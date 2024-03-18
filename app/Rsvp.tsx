"use client";

import React, { MouseEvent, useState, useEffect } from "react";

interface RsvpProps {
  group: string;
  description: string;
  time: string;
}

//   // RSVP Accepted State
//   {accepted && <div className="p-4 h-32"> </div>}

//   {/* // RSVP Accepted State */}
//   {declined && <div></div>}

export const Rsvp = (props: RsvpProps) => {
  const [accepted, setAccepted] = useState<boolean>(false);
  const [declined, setDeclined] = useState<boolean>(false);
  const [slide, setSlide] = useState("");
  const [active, setActive] = useState(true);

  const handleAccept = (event: MouseEvent) => {
    setAccepted(true);
  };

  const handleDecline = (event: MouseEvent) => {
    console.log("Hello");
    setDeclined(true);
  };

  const handleTransitionEnd = () => {
    setTimeout(() => {
      setSlide(`-translate-x-96`);
      setTimeout(() => {
        setActive(false);
      }, 700);
    }, 250);
  };

  return (
    <>
      {active && (
        <div
          className={`relative overflow-hidden rounded-lg transition-all duration-300 bg-stone-50 border border-stone-200 ${slide}`}
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
              <p className="font-semibold text-white">Accepted</p>
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
      )}
    </>
  );
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
