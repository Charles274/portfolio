import { useActiveSection } from "../../hooks/useActiveSection";

const BackToTop = () => {
  const { currentSection } = useActiveSection();

  return (
    <a
      href="#hero"
      style={{ visibility: currentSection === "hero" ? "hidden" : "visible" }}
      className="back-to-top d-flex align-items-center justify-content-center"
    >
      <i className="bi bi-arrow-up-short"></i>
    </a>
  );
};

export default BackToTop;
