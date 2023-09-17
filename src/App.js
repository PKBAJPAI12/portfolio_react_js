import "./App.css";
import { AppProvider } from "./AppContext";
import Navbar from "./Navbar";
import About from "./About";
import SkillSection from "./SkillSection";
import Projects from "./Projects";
import Experience from "./Experience";
import Certification from "./Certification";
import Contact from "./Contact";
import Footer from "./Footer";
function App() {
  return (
    <AppProvider>
      <Navbar />
      <About />
      <SkillSection />
      <Projects />
      <Experience />
      <Certification />
      <Contact />
      <Footer />
    </AppProvider>
  );
}

export default App;
