import "./App.css";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import VehicleModels from "./pages/VehicleModelsPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/models" element={<VehicleModels />} />
      </Routes>
    </div>
  );
}

export default App;
