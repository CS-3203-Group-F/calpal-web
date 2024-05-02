"use client";

import { logout } from "@/app/actions/auth";
import { Children, ReactNode, useState } from "react";
import { MoveItem } from "../Icons";

interface PanelProps {
  children?: ReactNode;
}

export const Panel = (props: PanelProps) => {
  function handleLogout() {
    logout();
  }

  return (
    <div className="h-screen w-96 items-start  shrink-0 border-r border-stone-200 overflow-auto no-scrollbar">
      {props.children}
      <div className="w-full flex items-center justify-center px-6 pt-6 pb-9">
        <button
          onClick={handleLogout}
          className="flex flex-row gap-2 hover:gap-2.5 transition-all"
        >
          <p className="text-red-500 text-base font-medium font-['Inter']">
            Logout
          </p>
          <MoveItem color="#EF4444" />
        </button>
      </div>
    </div>
  );
};
