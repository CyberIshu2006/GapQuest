import { motion } from "framer-motion";
import { FileText, Timer, Layers, Target} from "lucide-react";
function Stats() {
  const stats = [
    { number: "500+", label: "Papers Analyzed", icon: FileText},
    { number: "95%", label: "Time Saved",icon: Timer },
    { number: "50+", label: "Themes Detected",icon: Layers },
    { number: "20+", label: "Research Gaps Found", icon: Target },
  ];

  return (
    <section className="bg-black py-24 px-8 lg:px-16">
        <h2 className="text-4xl font-bold text-center text-white mb-4">
  Research at the Speed of <span className="text-[#1CB5B9]">AI</span>
</h2>

<p className="text-center text-[#D9D9D9] max-w-2xl mx-auto mb-16">
  GapQuest transforms hours of manual literature review into
  actionable insights within minutes.
</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
         <div key={index}
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
              <Icon className="w-10 h-10 text-[#1CB5B9]" />

            </div>
            <h2 className="text-5xl font-bold text-[#D9D9D9]">
              {stat.number}
            </h2>

            <p className="text-[#D9D9D9] mt-4">
              {stat.label}
            </p>
          </div>
          );
})}

      </div>
    </section>
  );
}

export default Stats;