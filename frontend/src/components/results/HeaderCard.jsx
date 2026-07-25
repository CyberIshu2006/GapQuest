import { motion } from "framer-motion";
import { BrainCircuit, BookOpen, Target } from "lucide-react";

function HeaderCard({ report }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        bg-[#111111]
        border
        border-[#1CB5B9]/20
        rounded-3xl
        p-8
        shadow-[0_0_35px_rgba(28,181,185,0.08)]
      "
    >
      {/* Report Title */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

        <div>

          <h1 className="text-4xl font-bold text-white">
            GapQuest Analysis Report
          </h1>

          <p className="text-[#D9D9D9] mt-3 leading-7 max-w-3xl">
            AI-generated insights from the uploaded research papers,
            highlighting common themes, research gaps, contradictions,
            and future research opportunities.
          </p>

        </div>

        {/* Confidence */}

        <div className="lg:w-72">

          <div className="flex justify-between items-center mb-3">

            <span className="text-[#D9D9D9]">
              AI Confidence
            </span>

            <span className="text-[#1CB5B9] font-semibold">
              {report.confidence_score ?? 0}%
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-black overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${report.confidence_score ?? 0}%` }}
              transition={{ duration: 1 }}
              className="
                relative
                h-full
                bg-[#1CB5B9]
              "
            >

              {/* Shimmer */}

              <motion.div
                animate={{
                  x: ["-100%", "500%"],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}
                className="
                  absolute
                  top-0
                  left-0
                  h-full
                  w-16
                  bg-white/30
                "
              />

            </motion.div>

          </div>

          <p className="text-sm text-gray-400 mt-3">
            Confidence is estimated based on the quality,
            consistency, and coverage of the uploaded research papers.
          </p>

        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-[#1CB5B9]/10 my-8"></div>

      {/* Report Metadata */}

      <div className="grid md:grid-cols-2 gap-6">

        {/* Domain */}

        <div
          className="
            rounded-2xl
            bg-black/30
            border
            border-[#1CB5B9]/10
            p-6
          "
        >

          <div className="flex items-center gap-3 mb-4">

            <BrainCircuit
              className="text-[#1CB5B9]"
              size={22}
            />

            <h3 className="text-lg font-semibold">
              Domain
            </h3>

          </div>

          <p className="text-[#D9D9D9] leading-7">
            {report.domain}
          </p>

        </div>

        {/* Focus Area */}

        <div
          className="
            rounded-2xl
            bg-black/30
            border
            border-[#1CB5B9]/10
            p-6
          "
        >

          <div className="flex items-center gap-3 mb-4">

            <Target
              className="text-[#1CB5B9]"
              size={22}
            />

            <h3 className="text-lg font-semibold">
              Focus Area
            </h3>

          </div>

          <p className="text-[#D9D9D9] leading-7">
            {report.focus_area}
          </p>

        </div>

      </div>

      {/* Footer */}

      <div className="flex items-center gap-3 mt-8 text-sm text-gray-400">

        <BookOpen
          size={18}
          className="text-[#1CB5B9]"
        />

        <span>
          This report is generated automatically by GapQuest AI based on
          the uploaded research papers and should be reviewed alongside
          the original sources.
        </span>

      </div>

    </motion.div>
  );
}

export default HeaderCard;