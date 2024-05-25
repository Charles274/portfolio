import PortfolioSection from "../homepage/components/portfolio-section/PortfolioSection";

const PortfolioPage = () => {
  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs bg-gradient">
        <div className="container">
          <div className="d-flex justify-content-end align-items-center">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Portfolio Details</li>
            </ol>
          </div>
        </div>
      </section>

      <PortfolioSection />
    </main>
  );
};

export default PortfolioPage;
