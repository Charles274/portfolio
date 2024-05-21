import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Civil Engineer",
        "Software Developer",
        "Freelancer",
        "Consultant",
      ],
      typeSpeed: 100,
      backSpeed: 200,
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
      </div>
    </section>
  );
};

export default Hero;
