import { motion } from "framer-motion";
import { Search, Lightbulb } from "lucide-react";
import EvidenceDropdown from "./EvidenceDropdown";

function ResearchGapCard({ report }) {
  const gaps = report?.research_gaps || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        bg-[#111111]
        border
        border-[#1CB5B9]/20
        rounded-3xl
        p-8
        shadow-[0_0_30px_rgba(28,181,185,.06)]
      "
    >

      {/* Header */}

      <div className="flex items-center gap-3 mb-8">

        <div
          className="
            w-12
            h-12
            rounded-xl
            bg-[#1CB5B9]/10
            flex
            items-center
            justify-center
          "
        >
          <Search
            size={24}
            className="text-[#1CB5B9]"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Research Gaps
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Potential research opportunities identified from the uploaded papers.
          </p>

        </div>

      </div>


      {/* Empty State */}

      {gaps.length === 0 ? (

        <div className="text-center py-10 text-gray-400">
          No research gaps detected.
        </div>

      ) : (

        <div className="space-y-8">

          {gaps.map((gap, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              className="
                bg-black/30
                border
                border-[#1CB5B9]/10
                rounded-2xl
                p-6
              "
            >

              <div className="flex items-start gap-4">

                {/* Number */}

                <div
                  className="
                    w-11
                    h-11
                    rounded-full
                    bg-[#1CB5B9]/10
                    text-[#1CB5B9]
                    font-bold
                    flex
                    justify-center
                    items-center
                    shrink-0
                  "
                >
                  {index + 1}
                </div>


                <div className="flex-1">


                  <h3 className="text-xl font-semibold">
                    Research Gap {index + 1}
                  </h3>


                  <p className="mt-4 text-[#D9D9D9] leading-8">
                    {gap.text}
                  </p>


                  {/* Recommendation Box */}

                  <div
                    className="
                      mt-6
                      rounded-2xl
                      border-l-4
                      border-[#1CB5B9]
                      bg-[#1CB5B9]/5
                      p-5
                    "
                  >

                    <div className="flex items-center gap-2 mb-3">

                      <Lightbulb
                        size={18}
                        className="text-[#1CB5B9]"
                      />

                      <span className="font-semibold">
                        Future Research Direction
                      </span>

                    </div>


                    <p className="text-[#D9D9D9] leading-7">
                      Further investigation is recommended to address this identified gap
                      through improved AI models, interdisciplinary approaches, and
                      real-world validation.
                    </p>


                  </div>


                  <EvidenceDropdown
                    evidence={gap.evidence || []}
                  />


                </div>

              </div>

            </motion.div>

          ))}

        </div>

      )}

    </motion.div>
  );
}

export default ResearchGapCard;