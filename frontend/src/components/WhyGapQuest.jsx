import { motion } from "framer-motion";
import { Clock, Search, Lightbulb} from "lucide-react";

function WhyGapQuest() {
  const cards = [
    {
      title: "Save Weeks of Research",
      desc: "Analyze multiple research papers within minutes instead of spending days reading and comparing them manually.",
       icon: Clock,    
    },
    {
      title: "Discover Hidden Opportunities",
      desc: "Identify unexplored research areas and opportunities that often remain unnoticed.",
      icon: Search,
    },
    {
      title: "Generate Actionable Insights",
      desc: "Receive AI-powered summaries, contradictions, findings, and future research directions instantly.",
      icon: Lightbulb,
    },
  ];

  return (
    <section id="why-gapquest" className="scroll-mt-32 bg-black py-24 px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-center text-white mb-16">
        Why <span className="text-[#1CB5B9]">GapQuest?</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
         <div
      key={index}
            className="
bg-[#111111]/80
backdrop-blur-sm
border border-[#1CB5B9]/20
rounded-2xl
p-8
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
              {card.title}
            </h3>

            <p className="text-[#D9D9D9] leading-relaxed">
              {card.desc}
            </p>
          </div>
          );
})}
      </div>
    </section>
  );
}

export default WhyGapQuest;