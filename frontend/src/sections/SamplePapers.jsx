import { useState } from "react";
import {
  FileText,
  Eye,
  Download,
  Calendar,
  BookOpen,
  X,
} from "lucide-react";

function SamplePapers() {
  const [selectedPaper, setSelectedPaper] = useState(null);

  const papers = [
    {
      title: "Artificial Intelligence in Healthcare",
      type: "IEEE Conference Paper",
      year: "2025",
      domain: "Artificial Intelligence",
      abstract:
        "This paper explores the application of Artificial Intelligence in healthcare, including disease prediction, medical imaging, and clinical decision support systems.",
      structure: [
        "Abstract",
        "Introduction",
        "Literature Review",
        "Methodology",
        "Results",
        "Conclusion",
        "References",
      ],
      file: "/pdfs/ieee-template.pdf",
    },
    {
      title: "Deep Learning for Smart Agriculture",
      type: "APA Research Paper",
      year: "2022",
      domain: "Agriculture",
      abstract:
        "This research presents deep learning techniques for crop prediction, irrigation optimization, and precision farming.",
      structure: [
        "Title Page",
        "Abstract",
        "Introduction",
        "Method",
        "Results",
        "Discussion",
        "References",
      ],
      file: "/pdfs/apa-template.pdf",
    },
    {
      title: "Green Computing: A Survey",
      type: "Survey Paper",
      year: "2025",
      domain: "Green Computing",
      abstract:
        "A comprehensive survey covering sustainable computing, energy-efficient data centers, carbon-aware scheduling, and future research directions.",
      structure: [
        "Abstract",
        "Introduction",
        "Existing Research",
        "Comparison",
        "Research Gaps",
        "Future Work",
        "Conclusion",
      ],
      file: "/pdfs/survey-paper.pdf",
    },
  ];

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-5xl font-bold">Sample Research Library</h1>
        <p className="text-[#D9D9D9] mt-3 max-w-3xl">
          Explore sample research papers from different formats and
          domains to understand structure, writing style and presentation.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {papers.map((paper, index) => (
          <div
            key={index}
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
            <div className="flex items-center gap-4 mb-5">
              <div className="bg-[#1CB5B9]/10 p-4 rounded-xl">
                <BookOpen className="text-[#1CB5B9]" size={28} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{paper.title}</h2>
                <p className="text-[#1CB5B9]">{paper.type}</p>
              </div>
            </div>

            <div className="space-y-2 text-[#D9D9D9]">
              <p>
                <Calendar className="inline mr-2" size={16} />
                {paper.year}
              </p>
              <p>
                <FileText className="inline mr-2" size={16} />
                {paper.domain}
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setSelectedPaper(paper)}
                className="
                flex-1
                bg-[#1CB5B9]
                text-black
                py-3
                rounded-xl
                font-semibold
                flex
                justify-center
                items-center
                gap-2
                hover:scale-105
                transition
                "
              >
                <Eye size={18} />
                Preview
              </button>

              <a
                href={paper.file}
                download
                className="
                flex-1
                border
                border-[#1CB5B9]
                py-3
                rounded-xl
                flex
                justify-center
                items-center
                gap-2
                hover:bg-[#1CB5B9]
                hover:text-black
                transition
                "
              >
                <Download size={18} />
                Download
              </a>
            </div>
          </div>
        ))}
      </div>

      {selectedPaper && (
        <div
          className="
          fixed
          inset-0
          bg-black/80
          flex
          justify-center
          items-center
          z-50
          p-6
          "
        >
          <div
            className="
            bg-[#111111]
            border border-[#1CB5B9]/30
            rounded-3xl
            max-w-3xl
            w-full
            p-8
            relative
            "
          >
            <button
              onClick={() => setSelectedPaper(null)}
              className="absolute right-6 top-6"
            >
              <X />
            </button>

            <h2 className="text-3xl font-bold mb-2">{selectedPaper.title}</h2>
            <p className="text-[#1CB5B9] mb-6">{selectedPaper.type}</p>

            <h3 className="text-xl font-semibold mb-3">Abstract</h3>
            <p className="text-[#D9D9D9] leading-7">{selectedPaper.abstract}</p>

            <a
              href={selectedPaper.file}
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-block
              bg-[#1CB5B9]
              text-black
              px-6
              py-3
              rounded-xl
              font-semibold
              mt-6
              mb-8
              "
            >
              Open Full PDF
            </a>

            <h3 className="text-xl font-semibold mt-8 mb-4">Paper Structure</h3>

            <div className="grid md:grid-cols-2 gap-3">
              {selectedPaper.structure.map((item) => (
                <div
                  key={item}
                  className="
                  bg-black
                  p-3
                  rounded-xl
                  border border-[#1CB5B9]/10
                  "
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SamplePapers;
