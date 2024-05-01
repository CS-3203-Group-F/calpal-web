import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { formatDate } from "./CalendarHeader";
import { Distance, Schedule } from "../Icons";

function formatTime(timeString: string) {
  const date = new Date(timeString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return `${formattedHours}:${formattedMinutes} ${ampm}`;
}

export function EventModal(props: {
  currentEvent: any;
  isOpen: boolean;
  openModal: any;
  closeModal: any;
}) {
  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={props.closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-3xl flex flex-col items-start gap-8 transform overflow-hidden rounded-2xl bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center leading-none gap-4">
                      <Dialog.Title
                        as="h3"
                        className="text-[32px] font-medium text-gray-900"
                      >
                        {props.currentEvent.title}
                      </Dialog.Title>
                      <div className="flex py-1 px-2 leading-none items-center border border-blue-500 rounded-full">
                        <span className="text-xs font-normal text-blue-500">
                          Uncategorized
                        </span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xl text-gray-500 font-normal">
                        <span className="text-gray-900">
                          {formatDate(props.currentEvent.start)} &bull;
                        </span>{" "}
                        {props.currentEvent.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    <div className="flex items-center gap-4 text-base font-normal text-gray-900">
                      <Schedule />
                      {props.currentEvent.allDay ? (
                        "All-day"
                      ) : (
                        <>
                          {formatTime(props.currentEvent.start)} -{" "}
                          {formatTime(props.currentEvent.end)}
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-base font-normal text-gray-900">
                      <Distance />{" "}
                      {props.currentEvent.location
                        ? props.currentEvent.location
                        : "No location"}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
