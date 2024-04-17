const groupFDataExample = {
  events: [
    {
      name: "CalPal planning",
      description: "Planning session for the upcoming CalPal event.",
      location: "Devon Energy Hall 0270",
      startTime: "2024-04-17T10:00:00.000Z",
      endTime: "2024-04-17T12:00:00.000Z",
    },
    {
      name: "CalPal planning",
      description: "Planning session for the upcoming CalPal event.",
      location: "Devon Energy Hall 0270",
      startTime: "2024-04-17T14:00:00.000Z",
      endTime: "2024-04-17T16:00:00.000Z",
    },
    {
      name: "Earnings Report",
      description: "Review and discussion of quarterly earnings report.",
      location: "CalPal Business Park Building 3, Room 2100",
      startTime: "2024-04-17T09:00:00.000Z",
      endTime: "2024-04-17T11:00:00.000Z",
    },
    {
      name: "Bonding trip",
      description: "Group bonding trip for members of Group F.",
      date: "2024-04-18T09:00:00",
      location: "Phoenix, Arizona",
      startTime: "2024-04-18T09:00:00.000Z",
      endTime: "2024-04-20T17:00:00.000Z",
    },
  ],
};

export function Calendar() {
  return (
    <div className="w-full">
      <Day />
    </div>
  );
}

function Day() {
  return (
    <div
      style={{ gridTemplateColumns: "repeat(24, minmax(0, 1fr))" }}
      className="grid"
    >
      <ScheduleBlock
        title="Neck Day"
        description="3x8 300lb watchamacallit, ..."
        startTime="2024-04-18T09:00:00.000Z"
        endTime="2024-04-20T17:00:00.000Z"
      />
    </div>
  );
}

interface ScheduleBlockProps {
  title: string;
  description: string;
  startTime: string;
  endTime: string;
}

function ScheduleBlock({
  title,
  description,
  startTime,
  endTime,
}: ScheduleBlockProps) {
  const start = new Date(startTime).getHours();
  const end = new Date(endTime).getHours();

  return (
    <div
      style={{
        gridColumn: `${start} / ${end}`,
      }}
      className="flex items-start border rounded-lg bg-amber-500 overflow-hidden"
    >
      <div className="flex flex-col items-start gap-2 self-stretch">
        <p className="text-base font-medium">{title}</p>
        <p className="text-[10px] font-medium">{description}</p>
      </div>
    </div>
  );
}

// Will use big calendar library
