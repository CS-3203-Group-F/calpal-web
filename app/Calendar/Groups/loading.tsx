export default function GroupsLoading() {
  return (
    <div className="flex flex-col min-h-screen w-96 items-center shrink-0 border-r border-stone-200 animate-pulse">
      <LoadingBox />
      <LoadingDetails />
    </div>
  );
}

function LoadingBox() {
  return <div className="flex w-full h-60 bg-gray-200"></div>;
}

function LoadingDetails() {
  return (
    <div className="w-full h-max">
      <LoadingPals />
      <LoadingEvents />
      <LoadingLinks />
    </div>
  );
}

function LoadingPals() {
  return (
    <div className="flex flex-col items-start self-stretch">
      <LoadingPalsInfo />
      <div className="flex flex-row m-6 justify-between items-center self-stretch ">
        <LoadingPal />
        <LoadingPal />
        <LoadingPal />
      </div>
    </div>
  );
}

function LoadingPalsInfo() {
  return (
    <div className="flex h-16 px-6 justify-between items-center self-stretch">
      <LoadingPillShort />
      <LoadingPillMedium />
    </div>
  );
}

function LoadingPal() {
  return (
    <div className="flex flex-col w-24 justify-center items-center gap-2">
      <div className="w-16 h-16 rounded-full bg-gray-200"></div>
      <LoadingPillFill />
    </div>
  );
}

function LoadingEvent() {
  return (
    <div className="w-full h-16 self-stretch bg-gray-200 rounded-lg"></div>
  );
}

function LoadingEvents() {
  return (
    <div className="flex flex-col px-6 items-center gap-2 self-stretch">
      <LoadingEvent />
      <LoadingEvent />
      <LoadingEvent />
    </div>
  );
}

function LoadingLinks() {
  return (
    <div className="flex flex-row m-6 self-stretch items-start gap-2">
      <LoadingPillShort />
      <LoadingPillMedium />
    </div>
  );
}

function LoadingPillShort() {
  return <div className="w-16 h-5 rounded-full bg-gray-200"></div>;
}

function LoadingPillMedium() {
  return <div className="w-32 h-5 rounded-full bg-gray-200"></div>;
}

function LoadingPillFill() {
  return <div className="self-stretch h-5 rounded-full bg-gray-200"></div>;
}
