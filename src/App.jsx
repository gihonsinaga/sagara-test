import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import Careers from "./pages/Careers";
import Certification from "./pages/Certification";
import FAQ from "./pages/FAQ";
import Dashboard from "./pages/DashboardAdmin";
import DashboardStudent from "./pages/DashboardStudent";
import PageNotFound from "./component/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboardStudent" element={<DashboardStudent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
