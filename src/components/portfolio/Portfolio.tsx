import { PortfolioItem } from "../../models/portfolio.model";

const Portfolio = () => {
  //List of items
  const portfolios = [
    "portfolio-1.jpg",
    "portfolio-2.jpg",
    "portfolio-3.jpg",
    "portfolio-4.jpg",
    "portfolio-5.jpg",
    "portfolio-6.jpg",
    "portfolio-7.jpg",
    "portfolio-8.jpg",
    "portfolio-9.jpg",
  ];

  return (
    <section id="portfolio" className="portfolio section-bg card">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-flters">
              <li data-filter="*" className="filter-active">
                All
              </li>
              <li data-filter=".filter-app">App</li>
              <li data-filter=".filter-card">Card</li>
              <li data-filter=".filter-web">Web</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {portfolios.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 portfolio-item filter-app"
            >
              <PortfolioCard img={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

export const PortfolioCard = ({ img }: PortfolioItem) => {
  return (
    <div className="portfolio-wrap">
      <img
        src={`/src/assets/img/portfolio/${img}`}
        className="img-fluid"
        alt=""
      />
      <div className="portfolio-links">
        <a
          href="/src/assets/img/portfolio/portfolio-1.jpg"
          data-gallery="portfolioGallery"
          className="portfolio-lightbox"
          title="App 1"
        >
          <i className="bx bx-plus"></i>
        </a>
        <a href="portfolio-details.html" title="More Details">
          <i className="bx bx-link"></i>
        </a>
      </div>
    </div>
  );
};
