import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import VehicleModels from "./pages/VehicleModelsPage";
import TestimonialsPage from "./pages/TestimonialsPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/models" element={<VehicleModels />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
    </div>
  );
}

export default App;
