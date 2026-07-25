import {
  FileText,
  CheckCircle,
  Download,
} from "lucide-react";

function APAGuide() {
  const sections = [
{
title:"Title Page",
desc:"Include the paper title, author's name, institution and other required details."
},
{
title:"Abstract",
desc:"Provide a brief overview of the research problem, methods, findings and conclusion."
},
{
title:"Introduction",
desc:"Introduce the topic, explain its significance and clearly state the research objectives."
},
{
title:"Method",
desc:"Describe participants, materials, procedures and research methods."
},
{
title:"Results",
desc:"Present findings objectively using tables, figures or statistical analysis."
},
{
title:"Discussion",
desc:"Interpret the results, compare them with previous work and discuss implications."
},
{
title:"References",
desc:"Include all sources cited using APA citation guidelines."
},
{
title:"Appendix",
desc:"Add supplementary material such as questionnaires, datasets or additional figures."
}
];

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold">
          APA Research Paper Format
        </h1>

        <p className="text-[#D9D9D9] mt-3">
          Follow the American Psychological Association
          formatting style used in academic research.
        </p>
      </div>

      <div className="bg-[#111111] rounded-3xl border border-[#1CB5B9]/20 p-8">

        <div className="flex items-center gap-4 mb-8">

          <FileText
            className="text-[#1CB5B9]"
            size={38}
          />

          <h2 className="text-3xl font-bold">
            Standard APA Structure
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-5">

          {sections.map((section)=>(

<div
key={section.title}
className="
bg-black
rounded-xl
p-6
border
border-[#1CB5B9]/10
hover:border-[#1CB5B9]
transition
"
>

<h3 className="text-xl font-semibold text-[#1CB5B9]">
{section.title}
</h3>

<p className="text-[#D9D9D9] mt-3 leading-7">
{section.desc}
</p>

</div>

))}

        </div>

      </div>

      <div className="bg-[#111111] rounded-3xl border border-[#1CB5B9]/20 p-8">

        <h2 className="text-2xl font-bold mb-5">
          APA Formatting Tips
        </h2>

        <ul className="space-y-3 text-[#D9D9D9]">

          <li>• Use Times New Roman (12 pt).</li>

          <li>• Double-space the document.</li>

          <li>• Include page numbers.</li>

          <li>• Follow APA citation style.</li>

          <li>• Maintain 1-inch margins.</li>

        </ul>

      </div>

      <button>
      <a
  href="/pdfs/apa-template.pdf"
  download="apa-template.pdf"
  className="
    inline-flex
    items-center
    gap-3
    bg-[#1CB5B9]
    text-black
    px-8
    py-4
    rounded-xl
    font-semibold
    hover:scale-105
    transition
  "
>
  <Download size={20} />
  Download APA Template
</a>

      </button>

    </div>
  );
}

export default APAGuide;