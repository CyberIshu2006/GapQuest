import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-gradient-to-b from-black to-[#07191A] py-32 px-8">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl font-bold text-white mb-6">
          Start Your
          <span className="text-[#1CB5B9]"> Research Quest</span>
        </h2>

        <p className="text-[#D9D9D9] text-lg mb-10">
          Discover hidden opportunities, accelerate literature review,
          and generate meaningful research insights with AI.
        </p>

        <Link
          to="/upload"
          className="inline-block px-10 py-5 rounded-2xl bg-[#1CB5B9] text-black font-bold text-lg hover:scale-105 transition"
        >
          Begin Quest
        </Link>

      </div>

    </section>
  );
}

export default CTA;