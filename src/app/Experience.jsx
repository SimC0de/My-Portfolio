"use client";
import React from "react";

export default function Experience() {
  const items = [

  ];
  return (
    <div className="col-span-2 flex flex-col gap-5 border border-[#222222] rounded-xl bg-[#111111] p-5 w-full h-full">
      <h1 className="section-title">Experience</h1>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">Fiverr Freelancer</h1>
          <h2 className="text[16px]">Video Editor</h2>
          <p className="text[16px]">(2022-2023)</p>
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold text-xl">ELECTRONIK HUB Intern</h1>
          <h2 className="text[16px]">Video Editor, Digital Artist</h2>
          <p className="text[16px]">(2026 January-April)</p>
        </div>
      </div>
    </div>
  );
}
