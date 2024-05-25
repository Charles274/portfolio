import { BreadCrumbsNav } from "../../layouts/DetailsPageLayout";
import PortfolioSection from "../homepage/components/portfolio-section/PortfolioSection";

const PortfolioPage = () => {
  return (
    <main id="main">
      <BreadCrumbsNav />

      <PortfolioSection layoutConfig="grid" />
    </main>
  );
};

export default PortfolioPage;
