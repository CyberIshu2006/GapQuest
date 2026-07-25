import { motion } from "framer-motion";
import { BookOpen, Search, Key, AlertTriangle, Compass, Sparkles} from "lucide-react";
function Features() {
  const features = [
    {
      title: "Research Summaries",
      description: "Concise overview of complex studies for quick understanding.",
      icon: BookOpen,
    },
    {
      title: "Theme Detection",
      description: "Identify recurring topics and patterns across literature.",
      icon: Search,
    },
    {
      title: "Key Findings Extraction",
      description: "Highlight the most important insights from research papers.",
      icon: Key,
    },
    {
      title: "Contradiction Detection",
      description: "Spot conflicting results or perspectives in studies.",
      icon: AlertTriangle,
    },
    {
      title: "Research Gap Discovery",
      description: "Reveal areas where further investigation is needed.",
      icon: Compass,
    },
    {
      title: "Future Recommendations",
      description: "Generate actionable suggestions for upcoming research.",
      icon: Sparkles,
    },
  ];

  return (
    <section
     id="features"
      className="bg-black py-24 px-8 lg:px-16"
    >
      
  <h2 className="text-4xl font-bold text-center mb-4">
    <span className="text-[#1CB5B9]">AI-Powered</span>
    <span className="text-white"> Features</span>
  </h2>

  <p className="text-center text-[#D9D9D9] mb-16 max-w-2xl mx-auto">
    Advanced AI capabilities that simplify literature review
    and accelerate research discovery.
  </p>


      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
          <div
      key={index}
            className="
bg-[#111111]/80
backdrop-blur-sm
rounded-2xl
p-8
border border-[#1CB5B9]/20
hover:border-[#1CB5B9]
hover:-translate-y-2
hover:shadow-[0_0_25px_rgba(28,181,185,0.2)]
transition-all
duration-300
text-center
"
          >
            <div className="flex justify-center mb-4">
              <Icon className="w-10 h-10 text-[#1CB5B9]" />
              </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              {feature.title}
            </h3>
            <p className="text-[#D9D9D9] leading-relaxed">
              {feature.description}
            </p>
          </div>
          );
})}
      </div>
    </section>
  );
}

export default Features;