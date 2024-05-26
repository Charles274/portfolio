import { Link, useLocation } from "react-router-dom";

export const BreadCrumbsNav = () => {
  const location = useLocation();

  let currentLink = "";

  // List of dynamic parameters to exclude from breadcrumbs
  const dynamicParams = ["details"]; // Add any other dynamic segments you want to exclude

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "" && !dynamicParams.includes(crumb))
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <li className="crumb breadcrumb-item text-white" key={currentLink}>
          <Link to={currentLink}> {toSentenceCase(crumb)}</Link>
        </li>
      );
    });

  // Add the Home link at the beginning
  const homeCrumb = (
    <li className="crumb breadcrumb-item text-white" key="home">
      <Link to="/">Home</Link>
    </li>
  );

  return (
    <nav aria-label="breadcrumb" className="breadcrumbs-nav">
      <ol className="breadcrumb d-flex justify-content-end p-3 m-0">
        {homeCrumb}
        {crumbs}
      </ol>
    </nav>
  );
};

function toSentenceCase(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
