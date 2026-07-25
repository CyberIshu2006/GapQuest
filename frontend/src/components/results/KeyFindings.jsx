import { motion } from "framer-motion";
import { CheckCircle2, Lightbulb } from "lucide-react";
import EvidenceDropdown from "./EvidenceDropdown";

function KeyFindings({ report }) {

  const findings = report?.key_findings || [];

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
          <Lightbulb
            size={24}
            className="text-[#1CB5B9]"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Key Findings
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Important observations identified from the uploaded research papers.
          </p>

        </div>

      </div>

      {findings.length === 0 ? (

        <div className="text-center py-10 text-gray-400">
          No Key Findings returned by the AI.
        </div>

      ) : (

        <div className="space-y-6">

          {findings.map((finding, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, x: -20 }}

              whileInView={{ opacity: 1, x: 0 }}

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

                <div
                  className="
                    w-10
                    h-10
                    rounded-full
                    bg-[#1CB5B9]/10
                    flex
                    items-center
                    justify-center
                    shrink-0
                  "
                >

                  <CheckCircle2
                    size={20}
                    className="text-[#1CB5B9]"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="font-semibold text-lg">

                    Finding {index + 1}

                  </h3>

                  <p className="mt-3 text-[#D9D9D9] leading-8">

                    {finding.text}

                  </p>

                  <EvidenceDropdown
                    evidence={finding.evidence || []}
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

export default KeyFindings;