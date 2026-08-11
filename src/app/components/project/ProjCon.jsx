import ProjCard from "./ProjCard";

export default function ProjCon() {
  const projects = [
    {
      id: 1,
      image: "/projects/birth_fact_generator.png",
      name: "Birth Fact Generator",
      desc: "A JavaScript terminal app that determines a random fact about your birth date",
      tags: ["JavaScript", "Node.js"],
      links: [{ github: "https://github.com/SimC0de/BirthFact-Generator" }],
    },
  ];

  return (
    <div className="col-span-3 flex flex-col gap-5 border border-[#222222] rounded-xl bg-[#111111] p-5">
      <div className="flex justify-between">
        <h1 className="section-title">Projects</h1>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {projects.slice(0, 3).map((proj) => (
          <ProjCard key={proj.id} proj={proj} />
        ))}
      </div>
    </div>
  );
}
