import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, FileText } from "lucide-react";

function EvidenceDropdown({ evidence = [] }) {
  const [open, setOpen] = useState(false);

  if (!evidence || evidence.length === 0) return null;

  return (
    <div className="mt-5">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 text-[#1CB5B9] font-medium hover:text-white transition-colors"
      >
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        {open ? "Hide Evidence" : "View Evidence"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-5"
          >
            <div className="space-y-4">
              {evidence.map((item, index) => (
                <div
                  key={index}
                  className="bg-black/30 border border-[#1CB5B9]/10 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-3">
                    <FileText
                      size={18}
                      className="text-[#1CB5B9]"
                    />
                    <span className="font-semibold">
                      {item.paper_title}
                    </span>
                  </div>

                  <p className="text-sm text-[#1CB5B9] mt-3">
                    Section: {item.section}
                  </p>

                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default EvidenceDropdown;