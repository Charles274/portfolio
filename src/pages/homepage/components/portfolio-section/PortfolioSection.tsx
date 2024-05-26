import { useState } from "react";
import { PortfolioProjects } from "../../../../data/projects/Projects.model";
import { PortfolioItem } from "../../../../models/portfolio.model";
import SeeMoreButton from "../../../../components/local/general-shared/see-more-button";
import { SlickPortfolioCarousel } from "../../../../components/foreign/general-shared/react-slick";

type PortfolioSectionProps = {
  layoutConfig: "carousel" | "grid";
};

const PortfolioSection = ({ layoutConfig }: PortfolioSectionProps) => {
  const [projects, setProjects] = useState<PortfolioItem[]>(PortfolioProjects);

  const [filter, setFilter] = useState("All");

  const handleFilter: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const value = e.currentTarget.id;
    setProjects(
      PortfolioProjects.filter((project) => project.category?.name === value)
    );
    setFilter(value);
  };

  const handleResetFilter = () => {
    setProjects(PortfolioProjects);
    setFilter("All");
  };

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            Welcome to My Portfolio. This is a showcase of some of my best work,
            featuring projects that demonstrate my skills and expertise. From
            Software to Civil Engineering, I've curated a selection of pieces
            that highlight my passion for what I do. Take a look around, and I
            hope you enjoy exploring my creative endeavors!
          </p>
        </div>

        <div className="row" data-aos="fade-up">
          <div className="d-flex justify-content-end">
            <SeeMoreButton
              path="/portfolio"
              text="See All Portfolio Items"
              visibility={layoutConfig === "grid" ? "hidden" : "visible"}
            />
          </div>
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li
                id="All"
                data-filter="*"
                className={filter === "All" ? "filter-active" : ""}
                onClick={handleResetFilter}
              >
                All
              </li>
              <li
                className={filter === "Web App" ? "filter-active" : ""}
                data-filter=".filter-app"
                id="Web App"
                onClick={handleFilter}
              >
                Web Apps
              </li>
              <li
                className={filter === "Civil" ? "filter-active" : ""}
                data-filter=".filter-card"
                id="Civil"
                onClick={handleFilter}
              >
                Civil
              </li>
              {/* <li data-filter=".filter-web">Web</li> */}
            </ul>
          </div>
        </div>

        {layoutConfig === "carousel" && (
          <SlickPortfolioCarousel items={projects} />
        )}

        {layoutConfig === "grid" && (
          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {projects.map((item, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 portfolio-item filter-app mb-4"
              >
                <PortfolioCard
                  img={item.img}
                  title={item.title}
                  category={item.category}
                  tags={item.tags}
                  id={item.id}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;

export const PortfolioCard = ({
  img,
  title,
  category,
  tags,
  id,
}: PortfolioItem) => {
  return (
    <div className="portfolio-wrap card d-flex flex-column justify-content-between p-3 m-2">
      <div className="portfolio-header d-flex justify-content-between">
        <div className="portfolio-project-logo">
          <i className={category?.iconClass}></i>
        </div>
        <div className="portfolio-project-options d-flex gap-3">
          <a
            href={`/portfolio/${id}/details`}
            className="btn  btn-outline-light d-flex gap-2 align-items-center"
          >
            Read Post<i className="bi bi-box-arrow-up-right"></i>
          </a>
          <div className="dropdown">
            <i className="bi bi-three-dots-vertical"></i>
          </div>
        </div>
      </div>
      <div className="cart-title">
        <h4 className="mb-4 mt-4">{title}</h4>
      </div>
      <div className="portfolio-tags-container d-flex gap-2 mb-2">
        {tags?.map((tag, index) => (
          <div key={index} className="portfolio-tag">
            #{tag}
          </div>
        ))}
      </div>
      <div className="portfolio-publish-date">
        {new Date().toLocaleDateString()}
      </div>
      <img src={`/images/portfolio/${img}`} className="img-fluid mt-3" alt="" />
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
