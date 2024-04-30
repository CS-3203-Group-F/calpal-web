import Image from "next/image";

interface SocialsProps {
  links: any;
}

export function Socials({ links }: SocialsProps) {
  return (
    <div className="flex flex-row flex-wrap gap-3 p-6 content-center items-start self-stretch border-t border-stone-200">
      {links.map((link: any, i: number) => (
        <LinkPill link={link.link} description={link.description} key={i} />
      ))}
    </div>
  );
}

function LinkPill(props: { link: string; description: string }) {
  const url = props.link;
  const websiteFavicon = `https://s2.googleusercontent.com/s2/favicons?domain=${url}`;

  return (
    <a
      href={url}
      className="flex p-1 w-max justify-center items-center rounded-full border border-stone-300  hover:bg-stone-200"
    >
      <div className="w-6 h-6 relative rounded-full overflow-hidden">
        <Image src={websiteFavicon} fill={true} alt="image" />
      </div>
      <p className="px-1 text-[13px]">{props.description}</p>
    </a>
  );
}
