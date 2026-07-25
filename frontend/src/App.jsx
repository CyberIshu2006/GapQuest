import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import ResultsDashboard from "./pages/ResultsDashboard";
import Workspace from "./pages/Workspace";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />

        <Route path="/upload" element={<Workspace />} />

        <Route path="/results" element={<ResultsDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;