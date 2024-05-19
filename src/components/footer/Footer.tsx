const Footer = () => {
  const currentDate = new Date().getFullYear();
  return (
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
  );
};

export default Footer;
