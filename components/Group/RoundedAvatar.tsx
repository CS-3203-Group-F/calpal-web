import Image from "next/image";
import { useEffect } from "react";

interface RoundedAvatarProps {
  image: string;
  name: string;
  radius?: number;
}

export function RoundedAvatar({
  image,
  name,
  radius = 64,
}: RoundedAvatarProps) {
  return (
    <div
      style={{ width: `${radius}px`, height: `${radius}px` }}
      className={`relative rounded-full overflow-hidden`}
    >
      <Image src={image} fill={true} alt={`${name} avatar`} />
    </div>
  );
}
