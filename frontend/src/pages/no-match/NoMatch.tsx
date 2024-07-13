import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <main id="main" className="main">
      <section id="portfolio">
        <h2>Nothing to see here!</h2>
        <p>
          <Link to="/">Go to the home page</Link>
        </p>
      </section>
    </main>
  );
};

export default NoMatch;
