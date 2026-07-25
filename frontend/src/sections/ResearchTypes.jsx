import {
  BookOpen,
  FileText,
  Users,
  FlaskConical,
  Briefcase,
  ChevronRight,
} from "lucide-react";

function ResearchTypes() {
  const researchTypes = [
    {
      title: "Journal Paper",
      icon: BookOpen,
      description:
        "A detailed paper presenting original research. These papers are peer-reviewed and published in academic journals.",
      use:
        "Best for publishing complete research with experiments and strong validation.",
      advantages: [
        "High credibility",
        "Peer reviewed",
        "Widely cited",
      ],
    },
    {
      title: "Conference Paper",
      icon: Users,
      description:
        "Research presented at conferences to quickly share new ideas with the academic community.",
      use:
        "Ideal for presenting recent work and receiving early feedback.",
      advantages: [
        "Fast publication",
        "Networking opportunities",
        "Latest innovations",
      ],
    },
    {
      title: "Survey Paper",
      icon: FileText,
      description:
        "Summarizes and compares existing research instead of proposing a new solution.",
      use:
        "Perfect when entering a new research field or understanding trends.",
      advantages: [
        "Easy literature review",
        "Identifies research gaps",
        "Explains existing work",
      ],
    },
    {
      title: "Experimental Paper",
      icon: FlaskConical,
      description:
        "Focuses on experiments, methodology, observations and validation.",
      use:
        "Suitable when proposing and testing a new technique.",
      advantages: [
        "Strong evidence",
        "Quantitative results",
        "Reproducible",
      ],
    },
    {
      title: "Case Study",
      icon: Briefcase,
      description:
        "Investigates a specific real-world problem, organization or implementation.",
      use:
        "Useful for analysing practical applications and industry solutions.",
      advantages: [
        "Real-world relevance",
        "Practical insights",
        "Detailed analysis",
      ],
    },
  ];

  return (
    <div className="space-y-10">

      <div>
        <h1 className="text-5xl font-bold">
          Types of Research Papers
        </h1>

        <p className="text-[#D9D9D9] mt-3 max-w-3xl">
          Different research papers serve different purposes. Understanding
          which type to write is one of the first steps in becoming an effective
          researcher.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        {researchTypes.map((paper) => {
          const Icon = paper.icon;

          return (
            <div
              key={paper.title}
              className="
              bg-[#111111]
              rounded-3xl
              border border-[#1CB5B9]/20
              p-8
              hover:border-[#1CB5B9]
              hover:-translate-y-2
              transition
              "
            >
              <div className="flex items-center gap-4 mb-6">

                <div className="bg-[#1CB5B9]/10 p-4 rounded-xl">
                  <Icon
                    size={28}
                    className="text-[#1CB5B9]"
                  />
                </div>

                <h2 className="text-2xl font-bold">
                  {paper.title}
                </h2>

              </div>

              <p className="text-[#D9D9D9] leading-7">
                {paper.description}
              </p>

              <div className="mt-6">

                <h3 className="font-semibold text-[#1CB5B9]">
                  Best Used For
                </h3>

                <p className="text-[#D9D9D9] mt-2">
                  {paper.use}
                </p>

              </div>

              <div className="mt-6">

                <h3 className="font-semibold text-[#1CB5B9] mb-3">
                  Advantages
                </h3>

                {paper.advantages.map((advantage) => (
                  <div
                    key={advantage}
                    className="flex items-center gap-2 mb-2"
                  >
                    <ChevronRight
                      size={18}
                      className="text-[#1CB5B9]"
                    />

                    <span>{advantage}</span>
                  </div>
                ))}

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}

export default ResearchTypes;