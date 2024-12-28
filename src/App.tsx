import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ProjectDetail from "./components/ProjectDetail";
import routes from "tempo-routes";

function App() {
  return (
    <div className="min-h-screen bg-black relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="relative z-10">
        <Suspense fallback={<p>Loading...</p>}>
          <>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/projects"
                element={<Home activeSection="Projects" />}
              />
              <Route path="/about" element={<Home activeSection="About" />} />
              <Route
                path="/contact"
                element={<Home activeSection="Contact" />}
              />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
            {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
          </>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
