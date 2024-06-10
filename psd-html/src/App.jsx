import React from "react";
import "./App.css";

import Footer from "./components/footer.jsx";
import OurProjects from "./components/cards.jsx";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div
      style={{
        backgroundImage: 'url("/img/Background.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <OurProjects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
