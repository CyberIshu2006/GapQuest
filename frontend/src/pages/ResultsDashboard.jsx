import HeaderCard from "../components/results/HeaderCard";
import SummaryCard from "../components/results/SummaryCard";
import KeyFindings from "../components/results/KeyFindings";
import Themes from "../components/results/Themes";
import ResearchGapCard from "../components/results/ResearchGapCard";
import ContradictionCard from "../components/results/ContradictionCard";
import FutureDirections from "../components/results/FutureDirections";

function ResultsDashboard() {

  const stored = localStorage.getItem("analysisResult"); // To take the AI result that backend has sent ans stored in local storage.//

  if (!stored) {
    return (
      <div className="text-center text-red-500 text-2xl mt-20">
        No analysis found.
      </div>
    );
  }

  let apiResponse;

  try {
    apiResponse = JSON.parse(stored);
  } catch (err) {
    return (
      <div className="text-center text-red-500 text-2xl mt-20">
        Invalid AI response.
      </div>
    );
  }

  const report = apiResponse?.result || {}; // Take the actual AI report.//

  return (
    <div className="max-w-7xl mx-auto space-y-8">

      <HeaderCard report={report} />

      <SummaryCard report={report} />

      <KeyFindings report={report} />

      <Themes report={report} />

      <ContradictionCard report={report} />

      <ResearchGapCard report={report} />

      <FutureDirections report={report} />

    </div>
  );
}

export default ResultsDashboard;
