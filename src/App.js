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
