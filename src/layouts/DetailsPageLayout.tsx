import { Outlet } from "react-router-dom";

const DetailsPageLayout = () => {
  return (
    <div>
      <BreadCrumbsNav />
      <Outlet />
    </div>
  );
};

export default DetailsPageLayout;

export const BreadCrumbsNav = () => {
  return (
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
  );
};
