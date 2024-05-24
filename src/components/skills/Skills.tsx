const Skills = () => {
  return (
    <section id="skills" className="skills section-bg ">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            What sets me apart? This section highlights my technical and
            creative skills, showcasing my expertise in Web Development and
            Engineering, I've got the skills to drive your project forward. Take
            a look to see how my skills align with your needs.
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="progress">
              <span className="skill">
                HTML <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                CSS <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                JavaScript <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar" role="progressbar"></div>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="progress">
              <span className="skill">
                PHP <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                WordPress/CMS <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar"></div>
              </div>
            </div>

            <div className="progress">
              <span className="skill">
                Photoshop <i className="val">55%</i>
              </span>
              <div className="progress-bar-wrap">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
