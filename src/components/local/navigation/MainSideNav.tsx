import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useActiveSection } from "../../../hooks/useActiveSection";
import { useEffect, useState } from "react";

const MainSideNav = () => {
  const { currentSection } = useActiveSection();
  const [isSideNavOpen, setSideNavOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1200) {
        // adjust these values to your needs
        setSideNavOpen(true);
      } else {
        setSideNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    // Trigger the handler initially to set the state correctly
    handleResize();

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggleSideNavOpen = () => {
    const width = window.innerWidth;
    if (width < 1200) setSideNavOpen(!isSideNavOpen);
  };

  return (
    <header id="header" style={{ left: isSideNavOpen ? "0px" : "-300px" }}>
      {/* ==Hamburger Menu Toggler== */}
      <div onClick={handleToggleSideNavOpen} className="">
        <i
          className={`bi bi-${
            isSideNavOpen ? "x" : "list"
          } mobile-nav-toggle d-xl-none`}
        ></i>
      </div>
      {/* ==Hamburger Menu Toggler== */}

      <div className="d-flex flex-column">
        <div className="profile">
          <Link to={"/"}>
            <img
              src="/images/passport.jpg"
              alt=""
              className="img-fluid rounded-circle"
            />
          </Link>
          <h1 className="text-light">
            <a href="/">Charles Owusu</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a
              href="https://www.facebook.com/charles.n.owusu"
              className="facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/brother_charles"
              className="instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/charles-owusu-903b3b120/"
              className="linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            {SectionNavItems.map((item) => (
              <li key={item.id}>
                <SectionNavItem
                  currentSection={currentSection}
                  icon={item.iconClass}
                  sectionId={item.sectionId}
                  sectionName={item.sectionName}
                  onClick={handleToggleSideNavOpen}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainSideNav;

interface ListItemProps {
  currentSection?: string;
  sectionId?: string;
  sectionName?: string;
  icon: string;
  onClick: () => void;
}

export const SectionNavItem: React.FC<ListItemProps> = ({
  currentSection,
  sectionId,
  sectionName,
  onClick,
  icon,
}) => {
  return (
    <HashLink
      to={`/#${sectionId}`}
      className={currentSection === sectionId ? "active" : "nav-link scrollto"}
      onClick={onClick}
    >
      <i className={icon}></i>{" "}
      <span className="nav-link-item">{sectionName}</span>
    </HashLink>
  );
};

//Section Nav Items
const SectionNavItems = [
  {
    id: 1,
    sectionId: "hero",
    sectionName: "Home",
    iconClass: "bi bi-house",
  },
  {
    id: 2,

    sectionId: "about",
    sectionName: "About",
    iconClass: "bi bi-info-circle",
  },
  {
    id: 3,

    sectionId: "facts",
    sectionName: "Facts",
    iconClass: "bi bi-pin-map",
  },
  {
    id: 4,

    sectionId: "skills",
    sectionName: "Skills",
    iconClass: "bi bi-asterisk",
  },
  {
    id: 5,

    sectionId: "resume",
    sectionName: "Resume",
    iconClass: "bi bi-pen",
  },
  {
    id: 6,

    sectionId: "portfolio",
    sectionName: "Portfolio",
    iconClass: "bi bi-journal",
  },
  {
    id: 7,

    sectionId: "services",
    sectionName: "Services",
    iconClass: "bi bi-server",
  },
  {
    id: 8,

    sectionId: "contact",
    sectionName: "Contact",
    iconClass: "bi bi-envelope",
  },
];
