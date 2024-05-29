import { Link } from "react-router-dom";
import { useActiveSection } from "../../../hooks/useActiveSection";

const Header = () => {
  const { currentSection } = useActiveSection();

  return (
    <header id="header">
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
            <a href="#" className="twitter">
              <i className="bi bi-twitter"></i>
            </a>
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
            {navItems.map((item) => (
              <li key={item.id}>
                <LinkListItem
                  currentSection={currentSection}
                  icon={item.iconClass}
                  sectionId={item.sectionId}
                  sectionName={item.sectionName}
                />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

interface ListItemProps {
  currentSection: string;
  sectionId: string;
  sectionName: string;
  icon: string;
}

const LinkListItem: React.FC<ListItemProps> = ({
  currentSection,
  sectionId,
  sectionName,
  icon,
}) => {
  return (
    <a
      href={`#${sectionId}`}
      className={currentSection === sectionId ? "active" : "nav-link scrollto"}
    >
      <i className={icon}></i>{" "}
      <span className="nav-link-item">{sectionName}</span>
    </a>
  );
};

//Nav Items
const navItems = [
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
