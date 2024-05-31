const FactsSection = () => {
  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p>
            Get to know me in a nutshell! Some real quick interesting facts.
          </p>
        </div>

        <div className="row no-gutters">
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
          >
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Happy: </strong> I'm a happy person. I spread happiness
                too.
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="521"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Excellence: </strong> Pursuit of Excellence is how I
                live.
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="1453"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Reliable</strong> You can count on me, any time, any
                day!
              </p>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="count-box">
              <i className="bi bi-people"></i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="32"
                data-purecounter-duration="1"
                className="purecounter"
              ></span>
              <p>
                <strong>Learner: </strong> Forever addicted to continuous
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsSection;
