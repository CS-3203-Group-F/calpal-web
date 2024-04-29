"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "../Icons";

interface PaginationProps {
  onSetPage?: any;
  numOfPages: number;
}

export function Pagination({ onSetPage, numOfPages }: PaginationProps) {
  const [page, setPage] = useState(0);

  function handlePageNavigation(page: number) {
    if (page === -1 || page === numOfPages) return;

    setPage(page);
    onSetPage?.(page);
  }

  return (
    <div className="flex flex-row items-center gap-4">
      <button
        className={
          page === 0
            ? "cursor-default"
            : "rounded transition-colors hover:bg-stone-200"
        }
        onClick={() => handlePageNavigation(page - 1)}
      >
        <ChevronLeft color={page === 0 ? "#D6D3D1" : ""} />
      </button>
      <p className=" text-base font-normal w-12 text-center">
        {page + 1} of {numOfPages}
      </p>

      <button
        className={
          page === numOfPages - 1
            ? "cursor-default"
            : "rounded transition-colors hover:bg-stone-200"
        }
        onClick={() => handlePageNavigation(page + 1)}
      >
        <ChevronRight color={page === numOfPages - 1 ? "#D6D3D1" : ""} />
      </button>
    </div>
  );
}
