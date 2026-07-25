function DashboardPreview() {
  return (
    <section className="bg-gradient-to-b from-black to-[#07191A] py-32 px-8 lg:px-16">

      {/* Heading */}

      <h2 className="text-4xl font-bold text-center mb-4">
        <span className="text-white">Preview Your </span>
        <span className="text-[#1CB5B9]">GapQuest Report</span>
      </h2>

      <p className="text-center text-[#D9D9D9] max-w-2xl mx-auto mb-20">
        Explore the AI-generated research report created from your uploaded
        papers, featuring summaries, key findings, evidence-backed insights,
        and research gaps.
      </p>

      <div className="max-w-6xl mx-auto bg-[#111111]/80 backdrop-blur-sm border border-[#1CB5B9]/20 rounded-3xl p-8">

        {/* Top Overview */}

        <div className="grid md:grid-cols-4 gap-4 mb-8">

          <div className="bg-black rounded-xl p-5 text-center">
           <h3 className="text-sm uppercase tracking-widest text-[#1CB5B9]">
  Domain
</h3>


            <p className="text-[#D9D9D9] mt-3">
              Renewable Energy
            </p>
          </div>

          <div className="bg-black rounded-xl p-5 text-center">
            <h3 className="text-sm uppercase tracking-widest text-[#1CB5B9]">
              Focus Area
            </h3>

            <p className="text-[#D9D9D9] mt-3">
              AI Forecasting
            </p>
          </div>

          <div className="bg-black rounded-xl p-5 text-center">
            <h3 className="text-sm uppercase tracking-widest text-[#1CB5B9]">
              Confidence
            </h3>

            <p className="text-[#D9D9D9] mt-3">
              92%
            </p>
          </div>

          <div className="bg-black rounded-xl p-5 text-center">
            <h3 className="text-sm uppercase tracking-widest text-[#1CB5B9]">
              Evidence
            </h3>

            <p className="text-[#D9D9D9] mt-3">
              Available
            </p>
          </div>

        </div>

        {/* Report Preview */}

        <div className="grid lg:grid-cols-2 gap-6">

          {/* Executive Summary */}

          <div className="bg-black rounded-2xl p-6">

            <h3 className="text-white font-semibold text-xl mb-4">
              Executive Summary
            </h3>

            <p className="text-[#D9D9D9] text-sm leading-relaxed">
              GapQuest analyzes uploaded research papers and automatically
              generates a concise overview highlighting the research focus,
              major findings, recurring trends, and potential opportunities
              for future work.
            </p>

          </div>

          {/* Research Gaps */}

          <div className="bg-black rounded-2xl p-6">

            <h3 className="text-white font-semibold text-xl mb-4">
              Research Gaps
            </h3>

            <ul className="text-[#D9D9D9] text-sm space-y-2">

              <li>• Limited real-world validation</li>

              <li>• Lack of Explainable AI techniques</li>

              <li>• Small multilingual datasets</li>

            </ul>

          </div>

          {/* Common Themes */}

          <div className="bg-black rounded-2xl p-6">

            <h3 className="text-white font-semibold text-xl mb-4">
              Common Themes
            </h3>

            <div className="flex flex-wrap gap-2">

              <span className="bg-[#1CB5B9]/20 text-[#1CB5B9] px-3 py-1 rounded-full text-sm">
                Renewable Energy
              </span>

              <span className="bg-[#1CB5B9]/20 text-[#1CB5B9] px-3 py-1 rounded-full text-sm">
                Deep Learning
              </span>

              <span className="bg-[#1CB5B9]/20 text-[#1CB5B9] px-3 py-1 rounded-full text-sm">
                Predictive Analytics
              </span>

            </div>

          </div>

          {/* Evidence */}

          <div className="bg-black rounded-2xl p-6">

            <h3 className="text-white font-semibold text-xl mb-4">
              Evidence Tracking
            </h3>

            <p className="text-[#D9D9D9] text-sm leading-relaxed">
              Every AI-generated insight is linked to its original research
              paper and section, allowing researchers to verify findings with
              complete transparency and confidence.
            </p>

          </div>

        </div>

        {/* Footer */}

        <div className="mt-8 pt-6 border-t border-[#1CB5B9]/10 text-center">

          <p className="text-[#D9D9D9] text-sm">

            Preview of the interactive AI-generated report available after
            analysis.

          </p>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;