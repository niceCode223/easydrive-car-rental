import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";

import "./App.css";

function App() {
  const [showVehicles, setShowVehicles] = useState(false);

  const handleVehiclesClick = () => {
    // Show vehicles
    setShowVehicles(true);

    // Wait for React to render the vehicle section
    setTimeout(() => {
      document
        .getElementById("vehicle-list")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 150);
  };

  return (
    <>
      <Navbar onVehiclesClick={handleVehiclesClick} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              showVehicles={showVehicles}
              setShowVehicles={setShowVehicles}
            />
          }
        />
      </Routes>

      <About />
 <Contact />
      <Footer />
    </>
  );
}

export default App;