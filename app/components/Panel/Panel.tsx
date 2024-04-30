"use client";

import { Children, ReactNode, useState } from "react";

interface PanelProps {
  children?: ReactNode;
}

export const Panel = (props: PanelProps) => {
  return (
    <div className="h-screen w-96 items-start shrink-0 border-r border-stone-200 overflow-auto no-scrollbar">
      {props.children}
    </div>
  );
};
