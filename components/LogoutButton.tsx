"use client";

import { logout } from "@/app/actions/auth";
import { MoveItem } from "./Icons";

export default function LogoutButton() {
  function handleLogout() {
    logout();
  }

  return (
    <button
      onClick={handleLogout}
      className="flex flex-row gap-2 hover:gap-2.5 transition-all"
    >
      <p className="text-red-500 text-base font-medium font-['Inter']">
        Logout
      </p>
      <MoveItem color="#EF4444" />
    </button>
  );
}
