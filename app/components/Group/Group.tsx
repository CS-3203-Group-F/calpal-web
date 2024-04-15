import { Members } from "./Members";
import { Events } from "./Events";
import { Socials } from "./Socials";
import { GroupHeader } from "./GroupHeader";

export interface Member {
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

interface SocialLink {
  link: string;
  description: string;
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
  socialLinks: SocialLink[];
  isPrivate: boolean;
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
  image: "/groupPictures/group-f/group-f.png",
  socialLinks: [
    {
      link: "https://www.figma.com/file/2Xuq6ueiTBRP7milKU7jay/CalPal?type=design&node-id=988%3A6345&mode=design&t=bkfiFZ87U0axDumw-1",
      description: "Figma file",
    },
    {
      link: "https://discord.gg/g9rRCcMY3u",
      description: "Group discord",
    },
    {
      link: "https://www.instagram.com/mrboom192",
      description: "Group Insta",
    },
    {
      link: "https://github.com/CS-3203-Group-F/calpal-web",
      description: "Repo",
    },
    {
      link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "secret link",
    },
  ],
  isPrivate: true,
};

interface GroupProps {}

export function Group() {
  // Need loading animation

  return (
    <div className="flex flex-col min-h-screen w-96 items-center shrink-0 border-r border-stone-200">
      <GroupHeader
        groupName={groupFDataExample.name}
        ownerId={groupFDataExample.ownerId}
        members={groupFDataExample.members}
        isPrivate={groupFDataExample.isPrivate}
        image={groupFDataExample.image}
      />
      <Members members={groupFDataExample.members} />
      <Events events={groupFDataExample.events} />
      <Socials links={groupFDataExample.socialLinks} />
    </div>
  );
}
