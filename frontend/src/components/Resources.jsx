import { motion } from "framer-motion";
import {FileText, BookOpen, Layers, File, Globe, Quote} from "lucide-react";
function Resources() {
  const resources = [
    {
      title: "IEEE Research Paper Guidelines",
      icon: FileText,
    },
    {
      title: "APA Research Standards",
      icon: BookOpen, 
    },
    {
      title: "Research Paper Types",
      icon: Layers,
    },
    {
      title: "Sample Research Papers",
      icon: File, 
    },
    {
      title: "Research Websites & Tools",
      icon: Globe,
    },
    {
      title: "Citation & Referencing Resources",
      icon: Quote, 
    },
  ];

  return (
    <section
      id="resources"
      className="bg-[#050505] py-24 px-8 lg:px-16"
    >
      <>
  <h2 className="text-4xl font-bold text-center mb-4">
    <span className="text-white">Research</span>
    <span className="text-[#1CB5B9]"> Resources</span>
  </h2>

  <p className="text-center text-[#D9D9D9] mb-16 max-w-2xl mx-auto">
    Everything researchers need beyond paper analysis.
  </p>
</>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {resources.map((item, index) => {
          const Icon = item.icon;
          return (
          <div key={index}
            className="
bg-[#111111]/80
backdrop-blur-sm
rounded-2xl
p-8
border border-[#1CB5B9]/20
hover:border-[#1CB5B9]
hover:-translate-y-2
transition
duration-300
text-center
"
          >
            <div className="flex justify-center mb-4">
                <Icon className="w-10 h-10 text-[#1CB5B9]" />
              </div>
            <h3 className="text-xl font-semibold text-white">
              {item.title}
            </h3>

            <p className="text-[#D9D9D9] mt-4">
              Access useful information and guidance for conducting high-quality research.
            </p>
          </div>
          );
})}
      </div>
    </section>
  );
}

export default Resources;