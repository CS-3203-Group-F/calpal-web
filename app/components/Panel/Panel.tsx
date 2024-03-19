"use client";

import { useState } from "react";
import { GroupCard } from "./GroupCard";
import { Rsvp, RsvpPill, RsvpStack } from "./Rsvp";
import { Section } from "./Section";
import { ToolboxCard } from "./Toolbox";

interface PanelProps {}

export const Panel = (props: PanelProps) => {
  return (
    <div className="flex flex-col min-h-screen w-96 p-6 items-center gap-8 shrink-0 border-r border-stone-200">
      <Rsvp></Rsvp>
      <Section title="Groups">
        <div className="flex flex-col gap-2">
          <GroupCard
            color="bg-orange-300"
            name="Linear Algebra"
            members="14"
          ></GroupCard>
          <GroupCard
            color="bg-lime-500"
            name="comp org"
            members="3"
          ></GroupCard>
          <GroupCard
            color="bg-red-500"
            name="roommates"
            members="4"
          ></GroupCard>
        </div>
      </Section>
      <Section title="Toolbox">
        <div className="flex flex-col gap-4">
          <ToolboxCard
            imgURL="http://127.0.0.1:8090/api/files/urvbq4tamjbjukn/tbd6zc5c3646q0o/toolbox_groups_W7QfCRTf9j.png?token="
            name="Find groups"
            description="Mingle with other pals"
          ></ToolboxCard>
          <ToolboxCard
            imgURL="http://127.0.0.1:8090/api/files/urvbq4tamjbjukn/5tvjqloxi2sjc1o/toolbox_schedule_HsJtyyBf2y.png?token="
            name="Plan a meeting"
            description="with CalPal"
          ></ToolboxCard>
          <ToolboxCard
            imgURL="http://127.0.0.1:8090/api/files/urvbq4tamjbjukn/bo1y02u8qmozh17/toolbox_import_30lI1DWg4K.png?token="
            name="Import schedules"
            description="into CalPal"
          ></ToolboxCard>
        </div>
      </Section>
    </div>
  );
};
