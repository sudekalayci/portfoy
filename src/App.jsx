import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import BlogSection from "./sections/BlogSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <div className="relative animated-gradient-bg text-white scroll-smooth min-h-screen">
  <Navbar />
  <main className="pt-32 space-y-40 px-6 max-w-7xl mx-auto">
    <section id="home"><HeroSection /></section>
    <section id="about"><AboutSection /></section>
    <section id="projects"><ProjectsSection /></section>
    <section id="blog"><BlogSection /></section>
    <section id="contact"><ContactSection /></section>
  </main>
</div>
  );
}

export default App;
