import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import EvidenceDropdown from "./EvidenceDropdown";

function FutureDirections({ report }) {

  const recommendations = report?.future_recommendations || [];

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
            justify-center
            items-center
          "
        >
          <Rocket
            size={24}
            className="text-[#1CB5B9]"
          />
        </div>

        <div>

          <h2 className="text-2xl font-bold">
            Future Recommendations
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            AI-generated recommendations based on the identified research gaps.
          </p>

        </div>

      </div>


      {recommendations.length === 0 ? (

        <div className="text-center py-10 text-gray-400">
          No future recommendations returned by AI.
        </div>

      ) : (

        <div className="space-y-6">

          {recommendations.map((item, index) => (

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

                  <h3 className="font-semibold text-lg">
                    Recommendation {index + 1}
                  </h3>

                  <p className="mt-3 text-[#D9D9D9] leading-8">
                    {item.text}
                  </p>


                  <EvidenceDropdown
                    evidence={item.evidence || []}
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

export default FutureDirections;