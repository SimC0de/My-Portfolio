export default function TechStack() {
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
    <div className="col-span-2 flex flex-col gap-5 border border-[#222222] rounded-xl bg-[#111111] p-5 w-full h-full">
      <h1 className="section-title">Tech & Tools</h1>
      <div className="grid grid-cols-2 grid-rows-2">
        {techTools.map((tt, index) => (
          <div key={index} className="flex flex-col border border-[#222222]">
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
  );
}
