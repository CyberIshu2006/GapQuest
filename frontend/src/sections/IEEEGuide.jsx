import {
  FileText,
  Download,
  CheckCircle,
} from "lucide-react";

function IEEEGuide() {
  const sections = [
{
title:"Title",
desc:"Write a clear and concise title that accurately reflects the research problem and contribution."
},
{
title:"Abstract",
desc:"Summarize the objective, methodology, key findings and conclusion in about 150–250 words."
},
{
title:"Keywords",
desc:"Include 4–6 important keywords that describe the core topics of your research."
},
{
title:"Introduction",
desc:"Explain the research problem, motivation, objectives and background of the study."
},
{
title:"Literature Review",
desc:"Discuss previous research, identify existing work and highlight research gaps."
},
{
title:"Methodology",
desc:"Describe datasets, algorithms, tools and methods used to conduct the research."
},
{
title:"Results & Discussion",
desc:"Present experimental results using tables or graphs and explain their significance."
},
{
title:"Conclusion",
desc:"Summarize the major findings, limitations and possible future work."
},
{
title:"References",
desc:"List all cited sources using the IEEE citation style."
},
];

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold">
          IEEE Paper Format
        </h1>

        <p className="text-[#D9D9D9] mt-3">
          Learn the standard IEEE structure used for
          conference and journal publications.
        </p>
      </div>

      <div
        className="
        bg-[#111111]
        rounded-3xl
        border border-[#1CB5B9]/20
        p-8
        "
      >

        <div className="flex items-center gap-4 mb-8">

          <FileText
            size={38}
            className="text-[#1CB5B9]"
          />

          <h2 className="text-3xl font-bold">
            Standard Structure
          </h2>

        </div>

        <div className="grid md:grid-cols-2 gap-6">

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

      <div
        className="
        bg-[#111111]
        rounded-3xl
        border border-[#1CB5B9]/20
        p-8
        "
      >

        <h2 className="text-2xl font-bold mb-6">
          Important IEEE Tips
        </h2>

        <ul className="space-y-4 text-[#D9D9D9]">

          <li>• Use two-column formatting.</li>

          <li>• Figures and tables must be numbered.</li>

          <li>• Use IEEE citation style.</li>

          <li>• Keep the abstract around 150–250 words.</li>

          <li>• Use professional, concise language.</li>

        </ul>

      </div>

      <button>
      <a
      href="/pdfs/ieee-template.pdf"
      download="ieee-template.pdf"
        className="
        inline-flex
        items-center
        gap-3
        bg-[#1CB5B9]
        text-black
        px-8
        py-4
        rounded-xl
        font-bold
        hover:scale-105
        transition
        "
      >
        <Download size={20} />

        Download IEEE Template

      </a>

      </button>

    </div>
  );
}

export default IEEEGuide;