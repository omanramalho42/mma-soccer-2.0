"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://github.com/bradpit",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://github.com/tomcruise",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
        "https://github.com/elonmusk.png",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
        "https://github.com/markzuckerberg.png",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
        "https://github.com/billgates.png",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://github.com/omanramalho42.png",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center m-2 p-3 w-[15rem]">
      <AnimatedTooltip items={people} />
    </div>
  );
}
