import React from "react";

import { AllProjects } from "../../data/projects/Projects.model";
import { PortfolioCard } from "../homepage/components/portfolio-section/PortfolioSection";

const PortfolioPage = () => {
  return (
    <main id="main">
      <section
        id="portfolio"
        className="portfolio section-bg"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {AllProjects.map((item, index) => (
            <div key={index} className="col-lg-4 g-3">
              <PortfolioCard
                images={item.images}
                title={item.title}
                category={item.category}
                tags={item.tags}
                id={item.id}
                projectStartDate={item.projectStartDate}
                projectEndDate={item.projectEndDate}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;
