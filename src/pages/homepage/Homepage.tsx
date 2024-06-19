// Import Components
import AboutSection from "./components/about-section/AboutSection";
import FactsSection from "./components/facts-section/FactsSection";
import SkillsSection from "./components/skills-section/SkillsSection";
import PortfolioSection from "./components/portfolio-section/PortfolioSection";
import Services from "./components/services-section/ServicesSection";
import ContactSection from "./components/contact-section/ContactSection";
import HeroSection from "./components/hero-section/HeroSection";
import ResumeSection from "./components/resume-section/ResumeSection";

const Homepage = () => {
  return (
    <>
      <HeroSection />
      <main id="main">
        <AboutSection />
        <FactsSection />
        <SkillsSection />
        <ResumeSection displayAll={false} />
        <PortfolioSection />
        <Services />
        <ContactSection />
      </main>
    </>
  );
};

export default Homepage;
