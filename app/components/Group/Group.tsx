import { PFPDefault } from "../Panel/GroupCard";
import { Section } from "../Panel/Section";
import { Members } from "./Members";
import { ChevronLeft, ChevronRight } from "./Icons";
import { Events } from "./Events";
import { Socials } from "./Socials";

interface Member {
  firstName: string;
  lastName: string;
  id: string;
  image: string;
}

interface Event {
  name: string;
  description: string;
  date: string;
  location: string;
  endDate?: string; // Optional property for events with end date
}

interface GroupData {
  id: string;
  ownerId: string;
  members: Member[];
  events: Event[];
  name: string;
  color: string;
  description: string;
  image: string;
  socialLinks: any;
}

const groupFDataExample: GroupData = {
  id: "group_f_2024",
  ownerId: "yungw1ggy",
  members: [
    {
      firstName: "Jason",
      lastName: "Nguyen",
      id: "mrboom192",
      image: "jason_nguyen.jpg",
    },
    {
      firstName: "Lauren",
      lastName: "Dodge",
      id: "laurendodge",
      image: "lauren_dodge.jpg",
    },
    {
      firstName: "Jimmy",
      lastName: "Tollett",
      id: "quazar_007",
      image: "jimmy_tollett.jpg",
    },
    {
      firstName: "Caleb",
      lastName: "Baade",
      id: "acidicmoss",
      image: "caleb_baade.jpg",
    },
    {
      firstName: "Kristiana",
      lastName: "Karshalieva",
      id: "xkrystiax",
      image: "kristiana_karshalieva.jpg",
    },
    {
      firstName: "Collin",
      lastName: "Sumrell",
      id: "scs727",
      image: "collin_sumrell.jpg",
    },
    {
      firstName: "Evan",
      lastName: "Wiggs",
      id: "yungw1ggy",
      image: "evan_wiggs.jpg",
    },
  ],
  events: [
    {
      name: "CalPal planning",
      description: "Planning session for the upcoming CalPal event.",
      date: "2024-03-12T09:00:00",
      location: "Devon Energy Hall 0270",
    },
    {
      name: "CalPal planning",
      description: "Planning session for the upcoming CalPal event.",
      date: "2024-04-07T10:00:00",
      location: "Devon Energy Hall 0270",
    },
    {
      name: "Earnings Report",
      description: "Review and discussion of quarterly earnings report.",
      date: "2024-04-18T14:00:00",
      location: "CalPal Business Park Building 3, Room 2100",
    },
    {
      name: "Bonding trip",
      description: "Group bonding trip for members of Group F.",
      date: "2024-04-18T09:00:00",
      endDate: "2024-04-21T17:00:00",
      location: "Pheonix, Arizona",
    },
  ],
  name: "Group F",
  color: "#6366F1",
  description: "This is a placeholder description",
  image: "milo.jpg",
  socialLinks: [
    {
      link: "https://www.facebook.com/groupF",
      description: "Official Facebook page",
    },
    {
      link: "https://twitter.com/groupF",
      description: "Official Twitter account",
    },
    {
      link: "https://www.instagram.com/groupF",
      description: "Official Instagram profile",
    },
    {
      link: "https://www.linkedin.com/company/groupF",
      description: "Official LinkedIn page",
    },
    {
      link: "https://www.youtube.com/groupF",
      description: "Feature demos and videos",
    },
    // Add more social media links as needed
  ],
};

interface GroupProps {}

export const Group = () => {
  // Need loading animation

  return (
    <div className="flex flex-col min-h-screen w-96 items-center shrink-0 border-r border-stone-200">
      <GroupHeader />
      <Members members={groupFDataExample.members} />
      <Events events={groupFDataExample.events} />
      <Socials links={groupFDataExample.socialLinks} />
    </div>
  );
};

const GroupHeader = () => {
  const groupImage =
    "http://127.0.0.1:8090/api/files/urvbq4tamjbjukn/m3nnylsjf045clv/d138_ef64_114_e_46_b7_8_c86_eeba193_ea2_cd_1_105_c_2_aCaJUzZlvX.png?token=";

  //background: linear-gradient(180deg, #FFF 25.5%, rgba(255, 255, 255, 0.75) 100%)

  return (
    <div
      className="h-72 w-full flex bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(180deg, #FFF 25.5%, rgba(255, 255, 255, 0.75) 100%), url(${groupImage})`,
      }}
    ></div>
  );
};
