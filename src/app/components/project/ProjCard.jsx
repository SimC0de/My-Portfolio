import Image from "next/image";
import { ExternalLink } from "lucide-react";

export default function ProjCard({ proj }) {
  return (
    <div className="flex flex-col border border-[#222222] rounded-2xl h-full">
      <div className="w-full h-full overflow-hidden rounded-t-2xl">
        <Image
          src={proj.image}
          width="1000"
          height="1000"
          alt="Birth Fact Generator Work"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-5 p-5">
        <h1 className="project-title">{proj.name}</h1>
        <p>{proj.desc}</p>
        <div className="flex flex-wrap gap-2.5">
          {proj.tags.map((tag, index) => (
            <h1
              key={index}
              className="font-bold text-black bg-white inline-block px-1.5 rounded-3xl"
            >
              {tag}
            </h1>
          ))}
        </div>
        {proj.links.length < 2 ? (
          <div className="flex justify-end">
            <a
              href={proj.links[0].github}
              target="_blank"
              className="font-bold flex items-center gap-1.5"
            >
              GitHub <ExternalLink className="inline" size={13} />
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
