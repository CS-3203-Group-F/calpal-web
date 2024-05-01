"use client";

import { logout } from "@/app/actions/auth";
import { Children, ReactNode, useState } from "react";

interface PanelProps {
  children?: ReactNode;
}

export const Panel = (props: PanelProps) => {
  function handleLogout() {
    logout();
  }

  return (
    <div className="h-screen w-96 items-start shrink-0 border-r border-stone-200 overflow-auto no-scrollbar">
      <button onClick={handleLogout}>Logout</button>
      {props.children}
    </div>
  );
};
