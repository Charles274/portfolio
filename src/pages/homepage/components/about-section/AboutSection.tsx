import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Through hard work, commitment and passion, I've taught myself to be
            Web Developer. I have a Bachelor's Degree in Civil Engineering, but
            I've always loved Computer Science since when I was a kid. I've been
            working as a Web Developer for 3+ years now, and I'm always looking
            to learn new things and improve my skills.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="/images/IMGL2860.jpg" className="card img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Frontend Web Developer &amp; Civil Engineer.</h3>
            <p className="fst-italic">Find a quick overview of who I am.</p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Fullname:</strong>{" "}
                    <span>Charles Owusu Agyapong</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Phone:</strong> <span>+233 544 803 023</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Email:</strong>
                    <span>charles274@live.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Country:</strong> <span>Ghana</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>City:</strong> <span>Accra</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <i className="bi bi-chevron-right"></i>{" "}
                    <strong>Language:</strong>
                    <span>English (Proficient)</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Special Cert.:</strong>{" "}
                    <span>Responsive Web Design</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Degree:</strong>{" "}
                    <span>Bachelor, Civil Engineering</span>
                  </li>

                  <li>
                    <i className="bi bi-chevron-right"></i>
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-justify">
              Passionate frontend developer with 3+ years of experience in
              crafting dynamic web applications. I specialize in bringing
              designs to life with pixel-perfect precision, collaborating with
              talented colleagues, and contributing to diverse projects using
              GIT and GITHUB.
              <br />
              <br />I have experience with modern frameworks like React and
              Angular and responsive layouts with Bootstrap, Tailwind. I also
              have foundational knowledge in backend technologies like Node.js,
              Express.js, and MongoDB. As a Civil Engineer with 6+ years of
              experience, I'm now a versatile and adaptable developer in the
              tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
