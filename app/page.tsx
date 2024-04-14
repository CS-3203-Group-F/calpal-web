import { Group } from "./components/Group/Group";
import { GroupCard } from "./components/Panel/GroupCard";
import { Panel } from "./components/Panel/Panel";
import { Rsvp } from "./components/Panel/Rsvp";
import { Section } from "./components/Panel/Section";
import { ToolboxCard } from "./components/Panel/Toolbox";

export default function Home() {
  return (
    <main className="text-stone-800 flex min-h-screen flex-row items-center justify-betweenS">
      <Panel>
        <Group></Group>
        {/* <Rsvp></Rsvp>
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
        </Section> */}
      </Panel>
      <div className="flex flex-col items-start w-full min-h-screen">
        <img src="http://127.0.0.1:8090/api/files/urvbq4tamjbjukn/075jdbmz87nmcit/calendar_view_iurGMpKA8V.png?token="></img>
      </div>
    </main>
  );
}
