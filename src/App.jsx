import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import BlogSection from "./sections/BlogSection";
import ContactSection from "./sections/ContactSection";
import React, { useMemo } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiJquery,
  SiJavascript,
  SiWordpress,
  SiHtml5,
  SiCss3,
  SiFigma,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <SiReact size={36} color="#61DAFB" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={36} color="#06B6D4" /> },
  { name: "Bootstrap", icon: <SiBootstrap size={36} color="#7952B3" /> },
  { name: "jQuery", icon: <SiJquery size={36} color="#0769AD" /> },
  { name: "JavaScript", icon: <SiJavascript size={36} color="#F7DF1E" /> },
  { name: "WordPress", icon: <SiWordpress size={36} color="#21759B" /> },
  { name: "HTML", icon: <SiHtml5 size={36} color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 size={36} color="#1572B6" /> },
  { name: "Figma", icon: <SiFigma size={36} color="#F24E1E" /> },
];

function App() {
   const scrollingSkills = useMemo(() => [...skills, ...skills], []);

  return (
    <div className="relative animated-gradient-bg text-white scroll-smooth min-h-screen">
  <Navbar />
  
  <main className="space-y-2 px-3 max-w-7xl mx-auto">
    <section id="home"><HeroSection /></section>
    <section id="about"><AboutSection /></section>
    <section id="projects"><ProjectsSection /></section>
    <section id="blog"><BlogSection /></section>
    <section id="contact"><ContactSection /></section>
  </main>
  {/* Alt: Kayar Teknoloji Kartları */}
<div className="relative w-full left-1/2 pb-20 -translate-x-1/2 overflow-hidden mt-12">
  <div className="flex gap-8 md:gap-12 animate-scroll w-max m-4">
    {scrollingSkills.map(({ name, icon }, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center justify-center
          w-24 h-24 sm:w-28 sm:h-28
          bg-white border border-gray-400/30
          rounded-lg
          select-none
          shadow-md
          hover:bg-white/40
          transition
          cursor-default
          shrink-0"
        title={name}
      >
        <div className="mb-2 sm:mb-3">{icon}</div>
        <span className="text-xs sm:text-sm font-semibold
          bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400
          bg-clip-text text-transparent drop-shadow-lg"
        >
          {name}
        </span>
      </div>
    ))}
  </div>
</div>
</div>
  );
}

export default App;
