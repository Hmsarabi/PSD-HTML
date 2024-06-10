import "./App.css";
import Hero from "./components/hero.jsx";

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
      <Hero />
      <OurProjects />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
