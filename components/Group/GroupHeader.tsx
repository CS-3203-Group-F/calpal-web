import Link from "next/link";
import { Member } from "./Group";
import { ChevronLeft, MoreHoriz, Check } from "../Icons";
import { RoundedAvatar } from "./RoundedAvatar";

interface GroupHeaderProps {
  groupName: string;
  ownerId: string;
  members: Member[];
  isPrivate: boolean;
  image: string;
}

export function GroupHeader({
  groupName,
  ownerId,
  members,
  isPrivate,
  image,
}: GroupHeaderProps) {
  return (
    <div
      className="flex flex-col gap-4 p-4 justify-start items-start self-stretch h-max w-full bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(180deg, #FFF 25.5%, rgba(255, 255, 255, 0.75) 100%), url(${image})`,
      }}
    >
      <GroupHeaderNavigation />
      <GroupInfo
        image={image}
        name={groupName}
        ownerId={ownerId}
        members={members}
        isPrivate={isPrivate}
      />
      <MembershipButton />
    </div>
  );
}

function GroupHeaderNavigation() {
  return (
    <div className="flex flex-row items-center justify-between self-stretch py-4">
      <Link className="flex flex-row items-center" href="/Calendar">
        <ChevronLeft />
        <p className="text-[17px]">Home</p>
      </Link>
      <button>
        <MoreHoriz />
      </button>
    </div>
  );
}

function GroupInfo(props: {
  image: string;
  name: string;
  ownerId: string;
  members: any;
  isPrivate: boolean;
}) {
  const Owner = props.members.find(
    (member: any) => member.id === props.ownerId
  );
  const ownerName = Owner
    ? `${Owner.firstName} ${Owner.lastName}`
    : "Undefined";

  return (
    <div className="flex flex-col justify-center items-center gap-3 self-stretch">
      <RoundedAvatar image={props.image} name={props.name} />
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="flex flex-row justify-center items-center gap-2">
          <p className="text-xl font-semibold">{props.name}</p>
          {props.isPrivate ? <PrivatePill /> : <PublicPill />}
        </div>
        <p>
          <span className=" text-stone-500">By</span> {ownerName}
        </p>
      </div>
    </div>
  );
}

function MembershipButton() {
  return (
    <div className="flex py-[10px] justify-center items-center gap-2 self-stretch border border-stone-300 rounded-lg bg-white/[.35]">
      <Check color="#22C55E" />
      <span className="text-sm font-semibold">Joined</span>
    </div>
  );
}

function PrivatePill() {
  return (
    <div className="flex py-1 px-2 justify-center items-center border border-rose-500 rounded-full">
      <span className="text-xs font-bold text-rose-500">Private</span>
    </div>
  );
}

function PublicPill() {
  return (
    <div className="flex py-1 px-2 justify-center items-center border border-green-500 rounded-full">
      <span className="text-xs font-bold text-green-500">Public</span>
    </div>
  );
}
