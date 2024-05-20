import { Waypoint } from "react-waypoint";
import { useActiveSection } from "../../hooks/useActiveSection";

const Footer = () => {
  const { handleEnter, handleExit } = useActiveSection();

  const currentDate = new Date().getFullYear();
  return (
    <Waypoint
      onEnter={(args) => handleEnter(args, "footer")}
      onLeave={handleExit}
    >
      <footer id="footer">
        <div className="container">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span>{currentDate}</span>
            </strong>
          </div>
          <div className="credits">
            {/* All the links in the footer should remain intact. 
          You can delete the links only if you purchased the pro version. 
          Licensing information: https://bootstrapmade.com/license/ 
          Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/  */}
          </div>
        </div>
      </footer>
    </Waypoint>
  );
};

export default Footer;
