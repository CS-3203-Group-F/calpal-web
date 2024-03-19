import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children?: ReactNode;
  shrink?: boolean;
  pill?: any;
}

//overflow-hidden transition-[height] duration-300 ${props.shrink && `h-0`}`

export const Section = (props: SectionProps) => {
  return (
    <div className={`flex flex-col w-full gap-6`}>
      <div className="border-b border-stone-200 pb-2 flex flex-row items-center gap-2 self-stretch">
        <h2>{props.title}</h2>
        {props?.pill}
      </div>

      <div className="relative">{props.children}</div>
    </div>
  );
};
