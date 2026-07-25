import { Brain, Search, FileText, Target } from "lucide-react";

function About() {
  const features = [
    {
      icon: FileText,
      title: "Understand Research",
      desc: "Upload multiple research papers and receive concise summaries, making literature review faster and easier."
    },
    {
      icon: Search,
      title: "Discover Research Gaps",
      desc: "GapQuest compares multiple papers to identify unexplored areas, inconsistencies, and future opportunities."
    },
    {
      icon: Brain,
      title: "AI-Powered Insights",
      desc: "Leverage Artificial Intelligence to extract key findings, common themes, contradictions, and recommendations."
    },
    {
      icon: Target,
      title: "Accelerate Innovation",
      desc: "Help students, researchers, and innovators move from reading papers to discovering new research ideas."
    }
  ];

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-5xl font-bold">
          About GapQuest
        </h1>

        <p className="text-[#D9D9D9] mt-4 leading-8 max-w-4xl">
          GapQuest is an AI-powered Research Gap Discovery Engine designed to
          simplify the research process. Instead of spending weeks reading
          dozens of papers manually, researchers can upload their papers and
          receive AI-generated summaries, research gaps, contradictions,
          future directions, and actionable insights—all from a single platform.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {features.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
              bg-[#111111]
              border border-[#1CB5B9]/20
              rounded-3xl
              p-8
              hover:border-[#1CB5B9]
              transition
              "
            >
              <div className="bg-[#1CB5B9]/10 w-fit p-4 rounded-xl mb-6">
                <Icon className="text-[#1CB5B9]" size={30}/>
              </div>

              <h2 className="text-2xl font-bold mb-4">
                {item.title}
              </h2>

              <p className="text-[#D9D9D9] leading-7">
                {item.desc}
              </p>

            </div>
          );
        })}

      </div>
    </div>
  );
}

export default About;