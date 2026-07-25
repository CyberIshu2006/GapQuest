import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import EvidenceDropdown from "./EvidenceDropdown";

function ContradictionCard({ report }) {

  const contradictions = report.contradictions || [];

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
            justify-center
            items-center
          "
        >

          <AlertTriangle
            size={24}
            className="text-[#1CB5B9]"
          />

        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Contradictions
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Conflicting findings identified across the uploaded research papers.
          </p>

        </div>

      </div>

      {/* No Contradictions */}

      {contradictions.length === 0 && (

        <div
          className="
            rounded-2xl
            border
            border-green-500/20
            bg-green-500/10
            p-6
            flex
            items-center
            gap-4
          "
        >

          <CheckCircle2
            size={28}
            className="text-green-400"
          />

          <div>

            <p className="font-semibold">
              No Significant Contradictions Found
            </p>

            <p className="text-sm text-gray-300 mt-1">
              The uploaded research papers show strong agreement across the identified findings.
            </p>

          </div>

        </div>

      )}

      {/* Contradictions */}

      <div className="space-y-6">

        {contradictions.map((item, index) => (

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

                <h3 className="text-lg font-semibold">
                  Contradiction {index + 1}
                </h3>

<p className="mt-3 text-[#D9D9D9] leading-8">
  {item.text}
</p>

                {/* Evidence */}

                <EvidenceDropdown
                  evidence={item.evidence || []}
                />

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </motion.div>
  );
}

export default ContradictionCard;