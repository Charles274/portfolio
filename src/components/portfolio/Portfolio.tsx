import { webProjects } from "../../data/projects/softwre-development/web-projects.model";
import { PortfolioItem } from "../../models/portfolio.model";

const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Welcome to My Portfolio This is a showcase of my best work,
            featuring projects that demonstrate my skills and expertise. From
            Civil to Tech, I've curated a selection of pieces that highlight my
            passion for what I do. Take a look around, and I hope you enjoy
            exploring my creative endeavors!
          </p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
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
          {webProjects.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 portfolio-item filter-app"
            >
              <PortfolioCard img={item.img} title={item.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

export const PortfolioCard = ({ img, title }: PortfolioItem) => {
  return (
    <div className="portfolio-wrap card p-3">
      <div className="portfolio-header d-flex justify-content-between">
        <div className="portfolio-project-logo">
          <i className="bi bi-amazon"></i>
        </div>
        <div className="portfolio-project-options d-flex gap-3">
          <button className="btn btn btn-outline-light d-flex gap-2 align-items-center">
            Read Post<i className="bi bi-box-arrow-up-right"></i>
          </button>
          <div className="dropdown">
            <i className="bi bi-three-dots-vertical"></i>
          </div>
        </div>
      </div>
      <div className="cart-title">
        <h4 className="mb-4 mt-4">{title}</h4>
      </div>
      <div className="portfolio-tags-container d-flex gap-2 mb-2">
        <span className="portfolio-tag">#tag 1 </span>
        <span className="portfolio-tag">#tag 2 </span>
      </div>
      <div className="portfolio-publish-date">
        {new Date().toLocaleDateString()}
      </div>
      <img
        src={`/src/assets/img/portfolio/${img}`}
        className="img-fluid mt-3"
        alt=""
      />
      <div className="user-actions-container d-flex justify-content-between mt-3">
        <div className="user-action vote">
          <i className="bi bi-hand-thumbs-up"></i>
          <span className="action-count">10</span>
        </div>
        <div className="user-action comment">
          <i className="bi bi-chat-left-dots"></i>
          <span className="action-count">10</span>
        </div>
        <div className="user-action bookmark">
          <i className="bi bi-bookmark"></i>
          <span className="action-count">10</span>
        </div>
        <div className="user-action copy-link">
          <i className="bi bi-link-45deg"></i>
        </div>
      </div>
    </div>
  );
};

export const PortfolioLinks = ({ title }: PortfolioItem) => {
  return (
    <div className="portfolio-links">
      <a
        href=""
        data-gallery="portfolioGallery"
        className="portfolio-lightbox"
        title={title}
      >
        <i className="bi bi-plus"></i>
      </a>
      <a href="portfolio-details.html" title="More Details">
        <i className="bi bi-link"></i>
      </a>
    </div>
  );
};
