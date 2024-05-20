import { Waypoint } from "react-waypoint";
import { useActiveSection } from "../../hooks/useActiveSection";

const Hero = () => {
  const { handleEnter, handleExit } = useActiveSection();

  return (
    <Waypoint
      onEnter={(args) => handleEnter(args, "home")}
      onLeave={handleExit}
    >
      <section
        id="hero"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <div className="hero-container" data-aos="fade-in">
          <h1>Charles Owusu</h1>
          <p>
            <span>I'm</span>
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            ></span>
          </p>
        </div>
      </section>
    </Waypoint>
  );
};

export default Hero;
