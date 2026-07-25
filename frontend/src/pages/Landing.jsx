import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyGapQuest from "../components/WhyGapQuest";
import Features from "../components/Features";
import Resources from "../components/Resources";
import Stats from "../components/Stats";
import HowItWorks from "../components/HowItWorks";
import DashboardPreview from "../components/DashboardPreview";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import WhoGapQuest from "../components/WhoGapQuest";

function Landing() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <WhyGapQuest />
      <WhoGapQuest />
      <Stats />
      <Features />
      <Resources />
      <HowItWorks />
      <DashboardPreview />
<CTA />
<Footer />
    </div>
  );
}

export default Landing;