import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhoWeAre from "./components/WhoWeAre";
import MissionVision from "./components/MissionVision";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import CoreValues from "./components/CoreValues";
import Team from "./components/Team";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="min-h-screen text-gray-900"
      style={{
        background:
          "linear-gradient(270deg, rgba(115, 182, 200, 0.58) 0%, rgba(184, 183, 196, 0.58) 100%)",
      }}
    >
      <Navbar />

      <Hero />

      <WhoWeAre />

      <MissionVision />

      <WhyChooseUs />

      <Services />

      <CoreValues />

      <Team />

      <CTA />

      <Footer />
    </div>
  );
}

export default App;