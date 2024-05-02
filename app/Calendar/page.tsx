import { GroupCard } from "@/components/Panel/GroupCard";
import { Rsvp } from "@/components/Panel/Rsvp";
import { Section } from "@/components/Panel/Section";
import { ToolboxCard } from "@/components/Panel/Toolbox";

export default function Calendar() {
  return (
    <div className="flex flex-col items-center self-stretch p-6 gap-8">
      <Rsvp />
      <Section title="Groups">
        <div className="flex flex-col gap-2">
          <GroupCard
            color="bg-orange-300"
            name="Linear Algebra"
            members="14"
            route="/Calendar/Groups"
          ></GroupCard>
          <GroupCard
            color="bg-lime-500"
            name="comp org"
            members="3"
            route=""
          ></GroupCard>
          <GroupCard
            color="bg-red-500"
            name="roommates"
            members="4"
            route=""
          ></GroupCard>
        </div>
      </Section>
      <Section title="Toolbox">
        <div className="flex flex-col gap-4">
          <ToolboxCard
            imgURL="toolboxPictures\toolbox-groups.png"
            name="Find groups"
            description="Mingle with other pals"
          ></ToolboxCard>
          <ToolboxCard
            imgURL="toolboxPictures\toolbox-import.png"
            name="Plan a meeting"
            description="with CalPal"
          ></ToolboxCard>
          <ToolboxCard
            imgURL="toolboxPictures\toolbox-schedule.png"
            name="Import schedules"
            description="into CalPal"
          ></ToolboxCard>
        </div>
      </Section>
    </div>
  );
}
