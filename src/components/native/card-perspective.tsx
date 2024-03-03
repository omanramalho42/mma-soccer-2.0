"use client";
import React from "react";
import { PinContainer } from "./pin-perspective.tsx";

export function CardPerspective() {
  return (
    <div className="flex items-start mt-6 justify-center ">
      <PinContainer
        title="www.mmasoccer/live.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex xl:bg-field-game bg-no-repeat bg-contain basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 xl:w-[11rem] xl:h-[11rem] w-[20rem] h-[20rem]">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
            Visualize a partida ao vivo
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-white">
              Veja as principais jogadas da partida
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 xl:bg-gradient-to-br xl:from-violet-500 xl:via-purple-500 xl:to-blue-500 bg-field-game bg-no-repeat bg-contain" />
        </div>
      </PinContainer>
    </div>
  );
}
