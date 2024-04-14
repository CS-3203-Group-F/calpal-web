"use client";

import { Children, ReactNode, useState } from "react";

interface PanelProps {
  children?: ReactNode;
}

export const Panel = (props: PanelProps) => {
  return (
    <div className="flex flex-col min-h-screen w-96 items-center gap-8 shrink-0 border-r border-stone-200">
      {props.children}
    </div>
  );
};
