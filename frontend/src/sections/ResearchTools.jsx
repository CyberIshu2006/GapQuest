import {
  ExternalLink,
  Search,
  Brain,
  Network,
  BookOpen,
  FileText,
  PenTool,
  Database,
} from "lucide-react";

function ResearchTools() {
  const tools = [
    {
      name: "Google Scholar",
      icon: Search,
      desc: "Search scholarly literature across journals, books, theses and conference papers.",
      link: "https://scholar.google.com",
    },
    {
      name: "Semantic Scholar",
      icon: Brain,
      desc: "AI-powered academic search engine with paper summaries and citations.",
      link: "https://www.semanticscholar.org",
    },
    {
      name: "Connected Papers",
      icon: Network,
      desc: "Visualize relationships between research papers.",
      link: "https://www.connectedpapers.com",
    },
    {
      name: "ResearchRabbit",
      icon: Database,
      desc: "Discover papers and build citation collections visually.",
      link: "https://www.researchrabbit.ai",
    },
    {
      name: "Zotero",
      icon: BookOpen,
      desc: "Reference manager for collecting and organizing research.",
      link: "https://www.zotero.org",
    },
    {
      name: "Mendeley",
      icon: FileText,
      desc: "Manage references, PDFs and collaborate with researchers.",
      link: "https://www.mendeley.com",
    },
    {
      name: "Overleaf",
      icon: PenTool,
      desc: "Online LaTeX editor for writing professional research papers.",
      link: "https://www.overleaf.com",
    },
  ];

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold">
          Research Tools
        </h1>

        <p className="text-[#D9D9D9] mt-3">
          Powerful platforms that every researcher should know.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">

        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <div
              key={tool.name}
              className="
              bg-[#111111]
              rounded-3xl
              border
              border-[#1CB5B9]/20
              p-7
              hover:border-[#1CB5B9]
              hover:-translate-y-2
              transition
              "
            >
              <div className="flex items-center gap-4 mb-5">

                <div className="bg-[#1CB5B9]/10 p-3 rounded-xl">
                  <Icon
                    className="text-[#1CB5B9]"
                    size={28}
                  />
                </div>

                <h2 className="text-2xl font-semibold">
                  {tool.name}
                </h2>

              </div>

              <p className="text-[#D9D9D9] leading-7">
                {tool.desc}
              </p>

              <a
                href={tool.link}
                target="_blank"
                rel="noreferrer"
                className="
                mt-6
                inline-flex
                items-center
                gap-2
                bg-[#1CB5B9]
                text-black
                px-5
                py-3
                rounded-xl
                font-semibold
                hover:scale-105
                transition
                "
              >
                Visit Website
                <ExternalLink size={18} />
              </a>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default ResearchTools;