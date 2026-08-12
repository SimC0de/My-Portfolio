"use client";

import { Cross, Icon, X } from "lucide-react";
import Image from "next/image";
import { MoveRight, ExternalLink, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function CertCard({ cert }) {
  const [selectedCert, setSelectedCert] = useState(null);
  return (
    <div className="flex flex-col border border-[#222222] rounded-2xl h-full">
      <h1 className="font-bold text-[22px] text-center bg-black rounded-t-2xl py-1.5">
        {cert.name}
      </h1>
      <div className="flex flex-col flex-1">
        <div className="flex justify-between border-b border-[#222222] py-2 px-5">
          <h2 className="font-bold flex items-center gap-1.5">
            {cert.publisher}
            <ExternalLink className="inline" size={13} />
          </h2>
          <h2>{cert.date}</h2>
        </div>
        <p className="flex items-center flex-1 p-5 border-b border-[#222222] text-justify">
          {cert.desc}
        </p>
        <div className="flex flex-wrap gap-2.5 px-5 py-2">
          {cert.tags.map((tag, index) => (
            <h1
              key={index}
              className="font-bold text-black bg-white inline-block px-1.5 rounded-3xl"
            >
              {tag}
            </h1>
          ))}
        </div>
      </div>
      <button
        onClick={() => setSelectedCert(cert)}
        className="font-bold border border-[#222222] rounded-b-2xl bg-black py-1.5"
      >
        View Certificate <ArrowRight className="inline" size={20} />
      </button>
      {selectedCert && (
        <div>
          <div className="fixed inset-0 flex bg-black/80 items-center justify-center z-10">
            <Image
              src={selectedCert.image}
              width={800}
              height={1}
              alt={selectedCert.alt}
              className="w-auto h-[full]"
            />
          </div>
          <div className="fixed top-5 right-5 flex items-center justify-center z-10">
            <button
              onClick={() => setSelectedCert(null)}
              className="bg-white rounded-[50%] p-3 text-black"
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
