import { useEffect, useRef } from "react";
import Typed from "typed.js";

const HeroSection = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Civil Engineer",
        "Software Developer",
        "Freelancer",
        "Consultant",
      ],
      typeSpeed: 50,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Charles Owusu</h1>
        <p>
          <span>I'm a </span>
          <span
            className="typed"
            data-typed-items="Designer, Developer, Freelancer, Photographer"
            ref={typedRef}
          ></span>
        </p>
        <a href="#about" className="btn btn-outline-info border-white hero-btn">
          Get Started <i className="bi bi-arrow-down"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
