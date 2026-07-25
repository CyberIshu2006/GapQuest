import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  LoaderCircle,
  Circle,
} from "lucide-react";

function ProcessingScreen({ setActivePage }) {


  // -----------------------------------------
  // Research Processing Stages
  // -----------------------------------------

  const stages = [
    {
      title: "Uploading Research Papers",
      description:
        "Uploading research papers securely to the GapQuest AI Engine.",
    },
    {
      title: "Extracting PDF Content",
      description:
        "Reading and extracting text, figures and metadata from PDFs.",
    },
    {
      title: "Cleaning & Organizing Text",
      description:
        "Removing unnecessary formatting and preparing structured content.",
    },
    {
      title: "Generating AI Summaries",
      description:
        "Creating concise summaries to understand every research paper.",
    },
    {
      title: "Detecting Common Themes",
      description:
        "Finding overlapping ideas, methods and research directions.",
    },
    {
      title: "Finding Contradictions",
      description:
        "Comparing papers to identify conflicting findings.",
    },
    {
      title: "Discovering Research Gaps",
      description:
        "Identifying unexplored opportunities for future research.",
    },
    {
      title: "Preparing Final Report",
      description:
        "Compiling the final AI-generated research gap report.",
    },
  ];

  // -----------------------------------------
  // Temporary Frontend Logic
  // Replace with backend response later
  // -----------------------------------------

  const [currentStage, setCurrentStage] = useState(0);
  const [completedStages, setCompletedStages] = useState([]);
  const [progress, setProgress] = useState(8);

  useEffect(() => {

  let stage = 0;

  const interval = setInterval(() => {

    stage++;

    if (stage < stages.length) {

      setCompletedStages((prev) => [...prev, stage - 1]);
      setCurrentStage(stage);
      setProgress(((stage + 1) / stages.length) * 100);

    } 

  }, 2800);


  const checkResult = setInterval(() => {

    const result = localStorage.getItem("analysisResult");

    if (result) {

      clearInterval(checkResult);
      clearInterval(interval);

      setCompletedStages(stages.map((_, index) => index));
      setProgress(100);

      setTimeout(() => {
        setActivePage("results");
      }, 1000);

    }

  }, 2000);


  return () => {
    clearInterval(interval);
    clearInterval(checkResult);
  };


}, []);

  return (

    <div className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center">

      {/* ------------------------------------------------ */}
      {/* Background Glow                                 */}
      {/* ------------------------------------------------ */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(28,181,185,0.14),transparent_70%)]
        "
      />

      {/* ------------------------------------------------ */}
      {/* Faint Grid                                       */}
      {/* ------------------------------------------------ */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          [background-size:40px_40px]
          [background-image:
          linear-gradient(to_right,#1CB5B9_1px,transparent_1px),
          linear-gradient(to_bottom,#1CB5B9_1px,transparent_1px)]
        "
      />

      {/* ------------------------------------------------ */}
      {/* Main Container                                   */}
      {/* ------------------------------------------------ */}

      <div className="relative z-10 w-full max-w-5xl px-8 py-12">

        {/* Heading */}

        <motion.h1

          initial={{ opacity: 0, y: -30 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.6 }}

          className="
            text-center
            text-5xl
            font-bold
            tracking-wide
          "

        >

          GapQuest AI Engine

        </motion.h1>

        <motion.p

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: .2 }}

          className="
            mt-5
            text-center
            text-lg
            text-gray-300
            max-w-2xl
            mx-auto
            leading-8
          "

        >

          Analyzing your research papers to discover
          meaningful research gaps using artificial intelligence.

        </motion.p>

       {/* AI Core */}

        <div className="flex justify-center mt-16">

          <div className="relative w-60 h-60">

            {/* Outer Ring */}

            <motion.div

              animate={{ rotate: 360 }}

              transition={{
                duration: 24,
                repeat: Infinity,
                ease: "linear",
              }}

              className="
                absolute
                inset-0
                rounded-full
                border
                border-[#1CB5B9]/30
              "
            />

            {/* Middle Ring */}

            <motion.div

              animate={{ rotate: -360 }}

              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}

              className="
                absolute
                inset-6
                rounded-full
                border-2
                border-dashed
                border-[#1CB5B9]/40
              "
            />

            {/* Inner Ring */}

            <motion.div

              animate={{
                scale: [1, 1.08, 1],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
              }}

              className="
                absolute
                inset-14
                rounded-full
                border
                border-[#1CB5B9]
                flex
                justify-center
                items-center
                shadow-[0_0_50px_rgba(28,181,185,.35)]
              "
            >

              {/* Core */}

              <motion.div

                animate={{
                  scale: [1, 1.2, 1],
                }}

                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}

                className="
                  w-16
                  h-16
                  rounded-full
                  bg-[#1CB5B9]
                  shadow-[0_0_35px_rgba(28,181,185,.9)]
                "
              />

            </motion.div>

          </div>

        </div>

        {/* Progress */}

        <div className="mt-14">

          <div className="w-full h-4 bg-[#111111] rounded-full overflow-hidden">

            <motion.div

              animate={{
                width: `${progress}%`,
              }}

              className="
                relative
                h-full
                bg-[#1CB5B9]
              "
            >

              <motion.div

                animate={{
                  x: ["-100%", "500%"],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}

                className="
                  absolute
                  top-0
                  left-0
                  h-full
                  w-24
                  bg-white/30
                "
              />

            </motion.div>

          </div>

          <div className="flex justify-between mt-4">

            <motion.p

              animate={{
                opacity: [.5, 1, .5],
              }}

              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}

              className="font-medium text-[#1CB5B9]"
            >

              Processing...

            </motion.p>

            <span className="text-[#D9D9D9]">

              GapQuest AI Pipeline

            </span>

          </div>

        </div>
        {/* ============================================= */}
        {/* Current Activity Card                         */}
        {/* ============================================= */}

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ delay: .3 }}

          className="
            mt-12
            rounded-3xl
            border
            border-[#1CB5B9]/20
            bg-white/5
            backdrop-blur-xl
            p-8
          "

        >

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-[#1CB5B9] uppercase tracking-widest">

                Current Activity

              </p>

              <h2 className="text-2xl font-semibold mt-3">

                {stages[currentStage].title}

              </h2>

            </div>

            <div className="flex items-center gap-3">

              <motion.div

                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 1, 0.5],
                }}

                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                }}

                className="
                  w-3
                  h-3
                  rounded-full
                  bg-[#1CB5B9]
                "

              />

              <span className="text-gray-300">

                AI Engine Active

              </span>

            </div>

          </div>

          <p
            className="
              mt-6
              text-gray-300
              leading-8
              text-lg
            "
          >

            {stages[currentStage].description}

          </p>

        </motion.div>

        {/* ============================================= */}
        {/* Research Pipeline                             */}
        {/* ============================================= */}
                <div className="mt-12">

          <h3 className="text-xl font-semibold mb-6">

            Research Pipeline

          </h3>

          <div className="space-y-5">

            {stages.map((stage, index) => (

              <motion.div

                key={stage.title}

                initial={{ opacity: 0, x: -20 }}

                animate={{ opacity: 1, x: 0 }}

                transition={{
                  delay: index * 0.05,
                }}

                className="
                  flex
                  items-center
                  gap-4
                "

              >

                {completedStages.includes(index) ? (

                  <motion.div

                    initial={{ scale: 0 }}

                    animate={{ scale: 1 }}

                    transition={{
                      type: "spring",
                      stiffness: 250,
                    }}

                  >

                    <CheckCircle2
                      size={24}
                      className="text-green-400"
                    />

                  </motion.div>

                ) : index === currentStage ? (

                  <LoaderCircle
                    size={24}
                    className="text-[#1CB5B9] animate-spin"
                  />

                ) : (

                  <Circle
                    size={22}
                    className="text-gray-600"
                  />

                )}

                <div>

                  <h4
                    className={`font-medium transition-colors duration-300 ${
                      completedStages.includes(index)
                        ? "text-white"
                        : index === currentStage
                        ? "text-[#1CB5B9]"
                        : "text-gray-500"
                    }`}
                  >

                    {stage.title}

                  </h4>

                  <p className="text-sm text-gray-400 mt-1">

                    {stage.description}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* ============================================= */}
        {/* Footer                                        */}
        {/* ============================================= */}

        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          transition={{ delay: .8 }}

          className="
            mt-16
            text-center
          "

        >

          <p className="text-gray-300 text-lg">

            Your research documents are being processed securely.

          </p>

          <p className="text-gray-500 mt-2">

            Please don't refresh or close this page.

          </p>

          <div className="flex justify-center mt-6">

            <motion.div

              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}

              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}

              className="
                w-3
                h-3
                rounded-full
                bg-[#1CB5B9]
              "

            />

          </div>

        </motion.div>

      </div>

    </div>

  );

}

export default ProcessingScreen;