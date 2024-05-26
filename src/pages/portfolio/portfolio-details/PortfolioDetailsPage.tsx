import { useParams } from "react-router-dom";
import { PortfolioProjects } from "../../../data/projects/Projects.model";
import BootstrapCarousel from "../../../components/foreign/general-shared/BootstrapCarousel";

const PortfolioDetailsPage: React.FC = () => {
  const { portfolioId } = useParams<{ portfolioId: string }>();
  const id = Number(portfolioId);
  const project = PortfolioProjects.find((proj) => proj.id == id);

  return (
    <main id="main">
      <section id="portfolio" className="portfolio-details section-bg">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              {/* //Carousel */}
              <BootstrapCarousel />
            </div>

            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: {project?.category.name}
                  </li>
                  <li>
                    <strong>Client</strong>: {project?.client}
                  </li>
                  <li>
                    <strong>Project date</strong>:{" "}
                    {project?.projectStartDate?.toLocaleDateString()}
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href={project?.projectUrl}>{project?.projectUrl}</a>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>Project Description</h2>
                <p>{project?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDetailsPage;
