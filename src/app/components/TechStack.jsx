"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { GitBranch, PencilRuler, ServerCog, SquareCode } from "lucide-react";

export default function TechStack() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedSnap, setSelectedSnap] = useState(0);

  const scrollTo = (index) => emblaApi?.scrollTo(index);
  const setupSnaps = (emblaApi) => setScrollSnaps(emblaApi.scrollSnapList());
  const setActiveSnap = (emblaApi) =>
    setSelectedSnap(emblaApi.selectedScrollSnap());

  useEffect(() => {
    if (!emblaApi) return;

    // #Research: Make sure to read more about this potential error
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setupSnaps(emblaApi);
    setActiveSnap(emblaApi);

    emblaApi.on("reInit", setupSnaps);
    emblaApi.on("reInit", setActiveSnap);
    emblaApi.on("select", setActiveSnap);
  }, [emblaApi]);
  const techTools = [
    {
      tech: "Frontend",
      tags: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
    },
    {
      tech: "Backend",
      tags: [
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "Supabase",
        "SQL",
      ],
    },
    {
      tech: "Development Tools",
      tags: ["Git", "GitHub", "VS Code", "Vercel"],
    },
    {
      tech: "Creative Tools",
      tags: ["DaVinci Resolve", "Figma"],
    },
  ];
  return (
    <div className="col-span-1 flex flex-col gap-5 border border-[#222222] rounded-xl bg-[#111111] p-5 w-full h-full">
      <h1 className="section-title">Tech & Tools</h1>
      <div className="embla flex flex-col gap-5 h-full">
        <div className="embla__viewport h-full" ref={emblaRef}>
          <div className="embla__container h-full">
            {techTools.map((tt, index) => (
              <div
                key={index}
                className="flex flex-col border border-[#222222] embla__slide h-full"
              >
                <h1 className="font-bold text-[18px] px-5 bg-black border-b border-b-[#222222]">
                  {tt.tech}
                </h1>
                <div className="flex flex-wrap items-center gap-2.5 p-5">
                  {tt.tags.map((tag, index) => (
                    <h1
                      key={index}
                      className="font-bold text-black bg-white inline-block px-1.5 rounded-3xl"
                    >
                      {tag}
                    </h1>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2 px-10 justify-between embla__dots">
          {scrollSnaps.map((_, index) => (
            <div className="flex flex-col gap-3 items-center" key={index}>
              {index === 0 ? (
                <SquareCode
                  className={`${index === selectedSnap ? "opacity-100" : "opacity-30"}`}
                />
              ) : index === 1 ? (
                <ServerCog
                  className={`${index === selectedSnap ? "opacity-100" : "opacity-30"}`}
                />
              ) : index === 2 ? (
                <GitBranch
                  className={`${index === selectedSnap ? "opacity-100" : "opacity-30"}`}
                />
              ) : index === 3 ? (
                <PencilRuler
                  className={`${index === selectedSnap ? "opacity-100" : "opacity-30"}`}
                />
              ) : null}
              <button
                className={"embla__dot".concat(
                  index === selectedSnap ? " embla__dot--selected" : "",
                )}
                key={index}
                onClick={() => scrollTo(index)}
              ></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
