// Import Components
import About from "./components/about/About";
import Facts from "./components/facts/Facts";
import Skills from "./components/skills/Skills";
import Resume from "./components/resume/Resume";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";

const Homepage = () => {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Facts />
        <Skills />
        <Resume displayAll={false} />
        <Portfolio />
        <Services />
        <Contact />
      </main>
    </>
  );
};

export default Homepage;
