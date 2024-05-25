import { services } from "../../../../data/services/services.model";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p className="text-justify">
            "What can I do for you? My services are designed to help individuals
            and businesses like yours succeed. From Web Development to Civil
            Engineering, I offer a range of solutions to meet your unique needs.
            Take a look at my services below to see how I can help you achieve
            your goals." Let me know if you need any adjustments or have any
            other requests!
          </p>
        </div>

        <div className="row">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 icon-box "
              data-aos="fade-up"
              key={index}
            >
              <ServiceItem
                title={service.title}
                description={service.description}
                iconClass={service.iconClass}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

export interface ServiceItemProps {
  title: string;
  description: string;
  iconClass: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  iconClass,
}) => {
  return (
    <>
      <div className="icon">
        <i className={iconClass}></i>
      </div>
      <h4 className="title">
        <a href="">{title}</a>
      </h4>
      <p className="description">{description}</p>
    </>
  );
};
