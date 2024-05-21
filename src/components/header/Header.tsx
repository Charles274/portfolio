import { useActiveSection } from "../../hooks/useActiveSection";
import MobileNavToggle from "../general-shared/mobile-nav-toggle";

const Header = () => {
  const { currentSection } = useActiveSection();

  return (
    <header id="header">
      <MobileNavToggle />
      <div className="d-flex flex-column">
        <div className="profile">
          <img
            src="\src\assets\img\passport.jpg"
            alt=""
            className="img-fluid rounded-circle"
          />
          <h1 className="text-light">
            <a href="index.html">Charles Owusu</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a href="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="google-plus">
              <i className="bi bi-skype"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            {/* Hero Section Nav Link */}
            <li>
              <a
                href="#hero"
                className={
                  currentSection === "hero" ? "active" : "nav-link scrollto"
                }
              >
                <i className="bi bi-house"></i>{" "}
                <span className="nav-link-item">Home</span>
              </a>
            </li>

            {/* About Section Nav Link */}

            <li>
              <a
                href="#about"
                className={
                  currentSection === "about" ? "active" : "nav-link scrollto"
                }
              >
                <i className="bi bi-info-circle"></i>{" "}
                <span className="nav-link-item">About</span>
              </a>
            </li>
            {/* Fact Section Nav Link */}

            <li>
              <a
                href="#facts"
                className={
                  currentSection === "facts" ? "active" : "nav-link scrollto"
                }
              >
                <i className="bi bi-pin-map"></i>{" "}
                <span className="nav-link-item">Facts</span>
              </a>
            </li>

            {/* Skills Section Nav Link */}

            <li>
              <a
                href="#skills"
                className={
                  currentSection === "skills" ? "active" : "nav-link scrollto"
                }
              >
                <i className="bi bi-asterisk"></i>{" "}
                <span className="nav-link-item">Skills</span>
              </a>
            </li>

            {/* Resume Section Nav Link */}

            <li>
              <a
                href="#resume"
                className={
                  currentSection === "resume" ? "active" : "nav-link scrollto"
                }
              >
                <i className="bi bi-pen"></i>{" "}
                <span className="nav-link-item">Resume</span>
              </a>
            </li>

            {/* Portfolio Section Nav Link */}

            <li>
              <a
                href="#portfolio"
                className={
                  currentSection === "portfolio"
                    ? "active"
                    : "nav-link scrollto"
                }
              >
                <i className="bi bi-journal"></i>{" "}
                <span className="nav-link-item">Portfolio</span>
              </a>
            </li>

            {/* Services Section Nav Link */}
            <li>
              <a
                href="#services"
                className={
                  currentSection === "services" ? "active" : "nav-link scrollto"
                }
              >
                <i className="bi bi-server"></i>{" "}
                <span className="nav-link-item">Services</span>
              </a>
            </li>

            {/* Contact Section Nav Link */}

            <li>
              <a
                href="#contact"
                className={
                  currentSection === "contact" ? "active" : "nav-link scrollto"
                }
              >
                <i className="bi bi-envelope"></i>{" "}
                <span className="nav-link-item">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
