import "./App.css";
import { AppProvider } from "./AppContext";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import SkillSection from "./Components/SkillSection";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Certification from "./Components/Certification";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <AppProvider>
       <Router>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<SkillSection />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;
