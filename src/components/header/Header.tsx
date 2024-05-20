import { useActiveSection } from "../../services/use-active-section";
import MobileNavToggle from "../general-shared/mobile-nav-toggle";

const Header = () => {
  const { activeItemId } = useActiveSection();

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
            <li>
              <a href="#hero" className="nav-link scrollto active">
                <i className="bi bi-house"></i>{" "}
                <span className="nav-link-item">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={
                  activeItemId === "about" ? "active" : "nav-link scrollto"
                }
              >
                <i className="bi bi-person"></i>{" "}
                <span className="nav-link-item">About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <i className="bi bi-pen"></i>{" "}
                <span className="nav-link-item">Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto">
                <i className="bi bi-journal"></i>{" "}
                <span className="nav-link-item">Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link scrollto">
                <i className="bi bi-server"></i>{" "}
                <span className="nav-link-item">Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
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
