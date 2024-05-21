const Skills = () => {
  return (
    <section id="skills" className="skills section-bg ">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
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
