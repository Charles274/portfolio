import { useRef, useState } from "react";
import { AllProjects } from "../../../../data/projects/Projects.model";
import { PortfolioItem } from "../../../../models/portfolio";
import { Link } from "react-router-dom";
import { getMonthYear } from "../../../../utils/DateFormatter";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const PortfolioSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set animation duration
      once: true, // Only animate once
    });
  }, []);

  const [projects, setProjects] = useState<PortfolioItem[]>(AllProjects);

  const [filter, setFilter] = useState("All");

  const handleFilter: React.MouseEventHandler<HTMLLIElement> = (e) => {
    const value = e.currentTarget.id;
    setProjects(
      AllProjects.filter((project) => project.category?.name === value)
    );
    setFilter(value);
  };

  const handleResetFilter = () => {
    setProjects(AllProjects);
    setFilter("All");
  };

  const carouselRef = useRef<HTMLDivElement>(null);

  const handleArrowClick = (direction: "left" | "right") => {
    const scrollAmount = 320; // Adjust this value based on the scroll distance you prefer

    if (carouselRef.current) {
      console.log(carouselRef.current.scrollLeft);

      const scrollContainer = carouselRef.current;
      if (direction === "left") {
        scrollContainer.scrollLeft -= scrollAmount;
      } else {
        scrollContainer.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <section
      id="portfolio"
      className="portfolio section-bg"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p data-aos="fade-up">
            Welcome to My Portfolio. This is a showcase of some of my best work,
            featuring projects that demonstrate my skills and expertise. From
            Software to Civil Engineering, I've curated a selection of pieces
            that highlight my passion for what I do. Take a look around, and I
            hope you enjoy exploring my creative endeavors!
          </p>
        </div>

        <div className="row">
          <div className="d-flex justify-content-end">
            <Link to={"/portfolio"}>See All</Link>
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
                className={filter === "Web Development" ? "filter-active" : ""}
                data-filter=".filter-app"
                id="Web Development"
                onClick={handleFilter}
              >
                Web Apps
              </li>
              <li
                className={
                  filter === "Civil Engineering" ? "filter-active" : ""
                }
                data-filter=".filter-card"
                id="Civil Engineering"
                onClick={handleFilter}
              >
                Civil
              </li>
            </ul>
          </div>
        </div>

        <div className="portfolio-carousel-container d-flex" ref={carouselRef}>
          {projects.map((project, index) => (
            <PortfolioCard
              title={project.title}
              projectStartDate={project.projectStartDate}
              category={project.category}
              id={project.id}
              projectEndDate={project.projectEndDate}
              tags={project.tags}
              key={index}
              images={project.images}
            />
          ))}
          <div
            className="carousel-arrow left"
            onClick={() => handleArrowClick("left")}
          >
            <i className="bi bi-caret-left-fill"></i>
          </div>

          <div
            className="carousel-arrow right"
            onClick={() => handleArrowClick("right")}
          >
            <i className="bi bi-caret-right-fill"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

export const PortfolioCard = ({
  images: img,
  title,
  category,
  tags,
  id,
  projectStartDate,
  projectEndDate,
}: PortfolioItem) => {
  return (
    <div className="portfolio-wrap card d-flex flex-column justify-content-between w-100 p-3 m-2">
      <div className="portfolio-header d-flex justify-content-between">
        <div className="portfolio-project-logo">
          <i className={category?.iconClass}></i>
        </div>
        <div className="portfolio-project-options d-flex gap-3">
          <Link
            to={`/portfolio/${id}/details`}
            className="btn  btn-outline-light d-flex gap-2 align-items-center"
          >
            Read Post<i className="bi bi-box-arrow-up-right"></i>
          </Link>
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
        {getMonthYear(projectStartDate)} -{" "}
        {projectEndDate ? getMonthYear(projectEndDate) : "Ongoing"}
      </div>
      <img
        src={`/images/portfolio/${img ? img[0] : ""}`}
        className="portfolio-card-image mt-3"
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
