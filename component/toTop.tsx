"use client";

import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

export default function ToTop() {
  const scrolEvent = () => {
    window.scrollTo(0, 0);
    console.log("salom");
  };
  return (
    <button
        onClick={scrolEvent}
      className="flex flex-col border-1 px-[15px] py-[5px] text-white items-center justify-center absolute bottom-4 right-4 "
    >
      <IoMdArrowDropup className="text-[20px]" />
      <span className="text-[14px]">TOP</span>
    </button>
  );
}
