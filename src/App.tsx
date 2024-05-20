// Import Styles
import React from "react";
import "./App.css";
import "./assets/css/style.css";

// Import Components
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Facts from "./components/facts/Facts";
import Footer from "./components/footer/Footer";
import BackToTop from "./components/general-shared/back-to-top";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import { ActiveSectionProvider } from "./providers/ActiveSectionProvider";

const App: React.FC = () => {
  return (
    <ActiveSectionProvider>
      <Header />
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <Contact />
        <BackToTop />
      </main>
      <Footer />
    </ActiveSectionProvider>
  );
};

export default App;
