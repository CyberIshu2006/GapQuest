import { motion } from "framer-motion";
import { Network } from "lucide-react";
import EvidenceDropdown from "./EvidenceDropdown";

function Themes({ report }) {
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
          <Network
            size={24}
            className="text-[#1CB5B9]"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Common Research Themes
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Frequently occurring themes identified across the uploaded research papers.
          </p>

        </div>

      </div>

      {/* Themes */}

            <div className="space-y-6">

        {(report.common_themes || []).length === 0 && (
          <p className="text-gray-400">
            No common themes detected.
          </p>
        )}

        {(report.common_themes || []).map((theme, index) => (

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

            {/* Theme Title */}

            <div className="flex items-center gap-4">

              <div
                className="
                  w-10
                  h-10
                  rounded-full
                  bg-[#1CB5B9]/10
                  flex
                  justify-center
                  items-center
                  text-[#1CB5B9]
                  font-bold
                  shrink-0
                "
              >
                {index + 1}
              </div>

              <div className="flex-1">

                <h3 className="text-lg font-semibold">

                  {theme.text}

                </h3>

              </div>

            </div>

            {/* Evidence */}

            <EvidenceDropdown
              evidence={theme.evidence}
            />

          </motion.div>

        ))}

      </div>

    </motion.div>
  );
}

export default Themes;