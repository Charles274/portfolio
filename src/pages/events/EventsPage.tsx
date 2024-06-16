import { WebDevFundamentals, Event } from "../../models/events.model";
import "../../assets/css/WebDevelopmentFlyer.css";

const EventsPage = () => {
  return (
    <main id="main">
      <section id="events" className="section-bg ">
        <WebDevelopmentFlyer event={WebDevFundamentals} />
      </section>
    </main>
  );
};

export default EventsPage;

export const WebDevelopmentFlyer: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="flyer-container">
      <div className="header">
        <div className="logo">
          <img src="path-to-your-logo.png" alt="Salford & Co." />
        </div>
        <div className="discount">
          <span>SAVE 30% OFF</span>
        </div>
      </div>
      <div className="content">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <div className="services row">
          <div className="col-md-8">
            <h2>What You'll Get</h2>
            <ul>
              {event.packages?.map((packageItem, index) => (
                <li key={index}>
                  <i className="bi bi-laptop m-2"></i> {packageItem}
                </li>
              ))}
            </ul>
            <button className="learn-more-btn">Learn More</button>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      <div className="footer">
        <p>reallygreatsite.com</p>
      </div>
    </div>
  );
};
