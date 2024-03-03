"use client";
import React from "react";
import { PinContainer } from "./pin-perspective.tsx";

export function CardPerspective() {
  return (
    <div className="h-full w-full flex items-start mt-6 justify-center ">
      <PinContainer
        title="www.mmasoccer/live.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex bg-field-game bg-no-repeat bg-contain basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[11rem] h-[11rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Visualize a partida ao vivo
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-white">
              Veja as principais jogadas da partida
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
  );
}
