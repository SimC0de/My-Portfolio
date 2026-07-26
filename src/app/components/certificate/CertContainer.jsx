import { Icon } from "lucide-react";
import Image from "next/image";
import { MoveRight, ExternalLink } from "lucide-react";
import CertCard from "./CertCard";

export default function CertContainer() {
  const certificates = [
    {
      id: "1",
      name: "Learn JavaScript",
      image: "/certificates/cc_learn_js_cert.png",
      alt: "CodeCademy JavaScript Certificate",
      publisher: "CodeCademy",
      date: "Jul 13, 2022",
      desc: "Learning the basic fundamentals of JavaScript.",
      tags: [
        "JavaScript",
      ],
    },
    {
      id: "2",
      name: "Learn Python",
      image: "/certificates/cc_learn_py_cert.png",
      alt: "CodeCademy Python Certificate",
      publisher: "CodeCademy",
      date: "May 13, 2024",
      desc: "Learning the basic fundamentals of Python.",
      tags: ["Python"],
    },
    {
      id: "3",
      name: "Learn SQL",
      image: "/certificates/cc_learn_sql_cert.png",
      alt: "CodeCademy SQL Certificate",
      publisher: "CodeCademy",
      date: "May 22, 2024",
      desc: "Learning the basic fundamentals of SQL.",
      tags: ["SQL"],
    },
    {
      id: "4",
      name: "Learn PHP",
      image: "/certificates/cc_learn_php_cert.png",
      alt: "CodeCademy PHP Certificate",
      publisher: "CodeCademy",
      date: "Jul 21, 2024",
      desc: "Learning the basic fundamentals of PHP.",
      tags: ["PHP"],
    },
  ];

  return (
    <div className="flex flex-col gap-5 border border-[#222222] rounded-xl bg-[#111111] py-5 px-10">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Certificates</h1>
        <div>
          <h1 className="text-xl font-bold">
            View More <MoveRight className="inline ml-2" size={20} />
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {certificates.slice(0, 3).map((cert) => (
          <CertCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
}
