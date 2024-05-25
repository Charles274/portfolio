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
              className="col-lg-4 col-md-6 icon-box text-justify"
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

interface ServiceItemProps {
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

const services: ServiceItemProps[] = [
  {
    title: "Frontend Development",
    description:
      "Crafting dynamic and responsive web applications using modern frameworks like React and Angular. Specializing in pixel-perfect precision and seamless user experiences.",
    iconClass: "bi bi-laptop",
  },
  {
    title: "Responsive Web Design",
    description:
      "Designing and developing websites that look great on all devices using Bootstrap and Tailwind. Ensuring optimal performance and accessibility across different screen sizes.",
    iconClass: "bi bi-phone",
  },
  {
    title: "Version Control with GIT",
    description:
      "Collaborating with teams and contributing to diverse projects using version control systems like GIT and platforms like GitHub. Ensuring code integrity and seamless teamwork.",
    iconClass: "bi bi-git",
  },
  {
    title: "Web Development Training",
    description:
      "Teaching web development skills, from frontend technologies like React and Angular to backend services using Node.js, Express.js, and MongoDB. Guiding learners through creating robust, full-stack applications.",
    iconClass: "bi bi-chalkboard-teacher",
  },
  {
    title: "Civil Engineering Consulting",
    description:
      "Providing expert advice and solutions in civil engineering with over 6 years of experience. Offering insights and support for construction and infrastructure projects.",
    iconClass: "bi bi-building",
  },
  {
    title: "Freelance Projects",
    description:
      "Available for freelance projects, bringing a versatile and adaptable approach to web development. Combining frontend expertise with a strong foundation in civil engineering.",
    iconClass: "bi bi-briefcase",
  },
];
