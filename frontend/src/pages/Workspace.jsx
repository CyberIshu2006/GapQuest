import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import IEEEGuide from "../sections/IEEEGuide";
import APAGuide from "../sections/APAGuide";
import ResearchTools from "../sections/ResearchTools";
import ResearchTypes from "../sections/ResearchTypes";
import SamplePapers from "../sections/SamplePapers";
import About from "../sections/About";
import ResultsDashboard from "../pages/ResultsDashboard";
import UploadBoard from "../components/UploadBoard";
import ProcessingScreen from "../pages/ProcessingScreen";

function Workspace() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activePage, setActivePage] = useState("upload");

  return (
    <div className="bg-black min-h-screen flex text-white">

      <Sidebar
        sidebarOpen={sidebarOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <div className="flex-1 flex flex-col">

        <Topbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 overflow-y-auto p-8">

          {activePage === "upload" && <UploadBoard setActivePage={setActivePage} />}
          {activePage === "processing" && (
    <ProcessingScreen
        setActivePage={setActivePage}
    />
)}
          {activePage === "results" && <ResultsDashboard />}

{activePage === "ieee" && <IEEEGuide />}

{activePage === "apa" && <APAGuide />}

{activePage==="tools" && <ResearchTools />}

{activePage === "types" && <ResearchTypes />}
{activePage === "samples" && <SamplePapers />}
{activePage === "about" && <About />}
{![
  "upload",
  "processing",
  "results",
  "ieee",
  "apa",
  "tools",
  "types",
  "samples",
  "about"
].includes(activePage) && (
  <div className="text-3xl">
    Coming Soon...
  </div>
)}

        </main>

      </div>

    </div>
  );
}

export default Workspace;