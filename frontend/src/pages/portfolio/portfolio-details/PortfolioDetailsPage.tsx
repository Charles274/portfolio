import React from "react";
import { useParams } from "react-router-dom";
import { AllProjects } from "../../../data/projects/Projects.model";
import BootstrapCarousel from "../../../components/foreign/general-shared/BootstrapCarousel";
import { getMonthYear } from "../../../utils/DateFormatter";

const PortfolioDetailsPage: React.FC = () => {
  const { portfolioId } = useParams<{ portfolioId: string }>();
  const id = Number(portfolioId);
  const project = AllProjects.find((proj) => proj.id == id);
  console.log(project);

  return (
    <main id="main">
      <section id="portfolio" className="portfolio-details section-bg">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              {/* //Carousel */}
              <BootstrapCarousel
                images={project?.images}
                title={project?.title}
              />
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project Summary</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: {project?.category?.name}
                  </li>
                  <li>
                    <strong>Brief</strong>: {project?.brief}
                  </li>
                  <li>
                    <strong>Position</strong>: {project?.position}
                  </li>
                  <li>
                    <strong>Location</strong>: {project?.location}
                  </li>
                  <li>
                    <strong>Client</strong>: {project?.client}
                  </li>
                  <li>
                    <strong>Company/Contractor</strong>: {project?.contractor}
                  </li>
                  <li>
                    <strong>Project Start Date</strong>:{" "}
                    {project?.projectStartDate &&
                      getMonthYear(project.projectStartDate)}
                  </li>
                  <li>
                    <strong>Project End Date</strong>:{" "}
                    {project?.projectEndDate &&
                      getMonthYear(project.projectEndDate)}
                  </li>
                  <li>
                    <strong>Project Status</strong>: {project?.status}
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href={project?.projectUrl}>{project?.projectUrl}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-description portfolio-info text-justify">
          <h2>Project Description</h2>
          <p>{project?.description?.introduction}</p>
          <p>{project?.description?.collaboration}</p>

          <p className="mb-1">
            <em> Key Features Included:</em>
          </p>

          <ul className="d-flex gap-4 align-items-end list-styled">
            {project?.description?.key_features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>

          <p>{project?.description?.conclusion}</p>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDetailsPage;
