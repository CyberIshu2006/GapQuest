import { useState } from "react";
import landingImg from "../assets/photos/landing.png";
import uploadImg from "../assets/photos/upload.png";
import processingImg from "../assets/photos/processing.png";
import reportImg from "../assets/photos/report.png";
function HowItWorks() {
  const [selectedImage, setSelectedImage] = useState(null);
 const steps = [
  {
    title: "Begin Your Research Journey",
    description:
      "Start from the GapQuest landing page and click 'Begin Quest' to access your AI-powered research workspace.",
    image: landingImg,
  },
  {
    title: "Upload Research Papers",
    description:
      "Upload one or more research papers in PDF format. You can also explore the Resources section for IEEE & APA formats, sample papers, research types, and useful research tools before starting the analysis.",
    image: uploadImg,
  },
  {
    title: "AI Processing Pipeline",
    description:
      "GapQuest intelligently extracts text, analyzes research content, identifies common themes, detects contradictions, and discovers potential research gaps using its AI pipeline.",
    image: processingImg,
  },
  {
    title: "Explore the GapQuest Report",
    description:
      "Review a structured AI-generated research report containing the domain, focus area, executive summary, key findings, common themes, contradictions, research gaps, future recommendations, supporting evidence, and confidence score.",
    image: reportImg,
  },
];

  return (
    <section
      id="how-it-works"
      className="bg-black py-32 px-6 lg:px-16"
    >
      <h2 className="text-4xl font-bold text-center mb-4">
        <span className="text-white">How </span>
        <span className="text-[#1CB5B9]">GapQuest</span>
        <span className="text-white"> Works</span>
      </h2>

      <p className="text-center text-[#D9D9D9] max-w-2xl mx-auto mb-24">
        Follow the complete research workflow—from entering the workspace and uploading papers to AI-powered analysis and an interactive research report.
      </p>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">

        {/* Vertical Line */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-[#1CB5B9] via-[#1CB5B9] to-transparent -translate-x-1/2"></div>

        <div className="space-y-28">

          {steps.map((step, index) => (

            <div
              key={index}
              className={`relative flex flex-col lg:flex-row items-center gap-14 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >

              {/* Timeline Circle */}

              <div
                className="
                hidden
                lg:flex
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-14
                h-14
                rounded-full
                bg-[#1CB5B9]
                text-black
                font-bold
                text-lg
                items-center
                justify-center
                border-4
                border-black
                shadow-[0_0_30px_rgba(28,181,185,0.7)]
                z-20
                "
              >
                {index + 1}
              </div>

              {/* Card */}

              <div
                className="
                flex-1
                bg-[#111111]
                rounded-2xl
                border
                border-[#1CB5B9]/20
                p-8
                hover:border-[#1CB5B9]
                hover:-translate-y-2
                hover:shadow-[0_0_30px_rgba(28,181,185,0.25)]
                transition-all
                duration-300
                "
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {step.title}
                </h3>

                <p className="text-[#D9D9D9] leading-8">
                  {step.description}
                </p>
              </div>

              {/* Image */}

             <div className="flex-1">

  <div
    onClick={() => setSelectedImage(step)}
    className="
      cursor-pointer
      rounded-3xl
      border-2
      border-[#1CB5B9]/30
      bg-[#111111]
      p-3
      shadow-[0_0_25px_rgba(28,181,185,.08)]
      hover:border-[#1CB5B9]
      hover:shadow-[0_0_35px_rgba(28,181,185,.25)]
      transition-all
      duration-300
      group
    "
  >

    <img
      src={step.image}
      alt={step.title}
      className="
        w-full
        rounded-2xl
        group-hover:scale-[1.02]
        transition-transform
        duration-500
      "
    />

    <p className="text-center text-sm text-[#1CB5B9] mt-3">
      Click to enlarge
    </p>

  </div>

</div>
            </div>

          ))}

        </div>

      </div>

{selectedImage && (

  <div

    onClick={() => setSelectedImage(null)}

    className="
      fixed
      inset-0
      bg-black/80
      backdrop-blur-sm
      z-50
      flex
      justify-center
      items-center
      p-6
    "

  >

    <div

      onClick={(e) => e.stopPropagation()}

      className="
        relative
        max-w-6xl
        w-full
      "

    >

      {/* Close Button */}

      <button
  onClick={() => setSelectedImage(null)}
  className="
    absolute
    top-4
    right-4
    w-10
    h-10
    rounded-full
    bg-black/70
    border
    border-[#1CB5B9]/30
    flex
    items-center
    justify-center
    text-white
    text-xl
    hover:bg-[#1CB5B9]
    hover:text-black
    transition-all
    duration-300
    z-10
  "
>
  ✕
</button>
      {/* Title */}

      <h3 className="text-center text-2xl font-bold mb-6">

        {selectedImage.title}

      </h3>

      {/* Image */}

     <div
  className="
    relative
    rounded-3xl
    border-2
    border-[#1CB5B9]
    overflow-hidden
    shadow-[0_0_60px_rgba(28,181,185,.35)]
  "
>

        <img

          src={selectedImage.image}

          alt={selectedImage.title}

          className="w-full"

        />

      </div>

    </div>

  </div>

)}
    </section>
  );
}

export default HowItWorks;