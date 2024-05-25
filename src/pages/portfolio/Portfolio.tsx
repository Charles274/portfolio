import PortfolioSection from "../homepage/components/portfolio-section/Portfolio";

const PortfolioPage = () => {
  console.log("Pooorttttto");

  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Portfolio Details</h2>
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
