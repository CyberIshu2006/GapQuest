import {
  GraduationCap,
  Microscope,
  University,
  Briefcase,
  Rocket,
  FlaskConical,
} from "lucide-react";

function Audience() {
  const audience = [
    {
      icon: GraduationCap,
      title: "Students",
      desc: "Simplify literature reviews, discover research gaps, and prepare stronger dissertations, projects, and thesis work in significantly less time.",
    },
    {
      icon: Microscope,
      title: "Researchers",
      desc: "Identify unexplored research opportunities, compare multiple publications, and accelerate innovation with AI-powered insights.",
    },
    {
      icon: University,
      title: "Professors",
      desc: "Guide students more effectively by quickly evaluating research trends, identifying knowledge gaps, and exploring emerging domains.",
    },
    {
      icon: FlaskConical,
      title: "R&D Teams",
      desc: "Track technological advancements, discover innovation opportunities, and make informed research decisions faster.",
    },
    {
      icon: Rocket,
      title: "Startups",
      desc: "Validate ideas using existing research, identify market opportunities, and uncover innovative directions before building products.",
    },
    {
      icon: Briefcase,
      title: "Universities",
      desc: "Empower students and faculty with an AI-powered platform that enhances research quality and promotes data-driven academic excellence.",
    },
  ];

  return (
    <section id="audience" className="bg-black py-24 px-8 lg:px-16">

      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-white mb-16">
          Who is <span className="text-[#1CB5B9]">GapQuest</span> For?
        </h2>

        <p className="text-[#D9D9D9] text-center max-w-3xl mx-auto mt-5 mb-16 leading-8">
          Designed for anyone pushing the boundaries of knowledge.
          Whether you're conducting academic research, driving innovation,
          or building the next breakthrough idea, GapQuest helps you
          discover meaningful research opportunities with AI.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {audience.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="
                bg-[#111111]/80
                backdrop-blur-sm
                border border-[#1CB5B9]/20
                rounded-2xl
                p-8
                text-center
                hover:border-[#1CB5B9]
                hover:-translate-y-2
                hover:shadow-[0_0_25px_rgba(28,181,185,0.2)]
                transition-all
                duration-300
                "
              >
                <div className="flex justify-center mb-4">
                
                  <Icon className="w-8 h-8 text-[#1CB5B9]" />

                </div>
              

                <h3 className="text-white text-2xl font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-[#D9D9D9] leading-relaxed">
                  {item.desc}
                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}

export default Audience;