import Image from "next/image";
import { Pagination } from "./Pagination";
import { Key, useState } from "react";
import { ExpandLess, ExpandMore } from "./Icons";

interface SocialsProps {
  links: any;
}

export function Socials({ links }: SocialsProps) {
  return (
    <div className="flex flex-col gap-4 p-6 content-center items-start self-stretch border-t border-stone-200">
      <p>{links[0].link}</p>
    </div>
  );
}
