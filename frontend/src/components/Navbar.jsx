import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-[#1CB5B9]/10">

      <div className="grid grid-cols-3 items-center h-24 px-10 lg:px-16">

        {/* Left */}
        <div className="flex justify-start">
          <h1 className="text-3xl font-bold tracking-wide cursor-pointer">
            <span className="text-[#1CB5B9]">Gap</span>
            <span className="text-[#D9D9D9]">Quest</span>
          </h1>
        </div>

        {/* Center */}
        <div className="hidden lg:flex justify-center items-center gap-10 text-[#D9D9D9] font-medium">

          <a href="#home" className="hover:text-[#1CB5B9] transition duration-300">
            Home
          </a>

          <a href="#why-gapquest" className="hover:text-[#1CB5B9] transition duration-300">
            Why
          </a>

          <a href="#audience" className="hover:text-[#1CB5B9] transition duration-300">
            Audience
          </a>

          <a href="#features" className="hover:text-[#1CB5B9] transition duration-300">
            Features
          </a>

          <a href="#resources" className="hover:text-[#1CB5B9] transition duration-300">
            Resources
          </a>

          <a href="#how-it-works" className="hover:text-[#1CB5B9] transition duration-300">
            Workflow
          </a>

        </div>

        {/* Right */}
        <div className="flex justify-end">

          <Link
            to="/upload"
            className="px-7 py-3 rounded-xl bg-[#1CB5B9] text-black font-semibold hover:scale-105 transition duration-300"
          >
            Begin Quest
          </Link>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;