import { Link } from "react-router-dom";
import logo from "../assets/photos/logo.png";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="home" className="min-h-[85vh] bg-black px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-16">

      {/* Left Side Logo */}
      <motion.div
  className="flex-1 flex justify-center"
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
>
        <img
          src={logo}
          alt="GapQuest Logo"
          className="w-[350px] md:w-[450px] lg:w-[550px] drop-shadow-[0_0_40px_rgba(28,181,185,0.4)]"
        />
      </motion.div>

      {/* Right Side Content */}
     <motion.div
  className="flex-1 text-center lg:text-left"
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5, delay: 0.2 }}
>

        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
          Discover Hidden
          <span className="block text-[#1CB5B9]">
            Research Opportunities
          </span>
        </h2>

        <p className="mt-6 text-lg text-[#D9D9D9] leading-relaxed max-w-xl">
          Upload research papers, uncover common themes,
          identify contradictions, discover research gaps,
          and generate future research directions using AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">

          <Link
            to="/upload"
            className="px-8 py-4 rounded-xl bg-[#1CB5B9] text-black font-semibold hover:scale-105 transition text-center"
          >
            Begin Quest
          </Link>

          <a
            href="#features"
            className="px-8 py-4 rounded-xl border border-[#1CB5B9] text-[#1CB5B9] hover:bg-[#1CB5B9] hover:text-black transition text-center"
          >
            Explore Features
          </a>

        </div>

      </motion.div>
    </section>
  );
}

export default Hero;