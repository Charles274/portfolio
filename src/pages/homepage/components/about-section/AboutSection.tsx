import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            I have dedicated myself to the realm of Web Development through
            unwavering determination, perseverance, and a deep-rooted passion
            for the craft. While I hold a Bachelor's Degree in Civil
            Engineering, my enduring affection for Computer Science has been
            present since my formative years. Over the past three years, I have
            honed my expertise as a Web Developer, consistently seeking
            opportunities for growth and advancement in my skill set. I remain
            committed to continuous learning, eagerly embracing new knowledge to
            further excel in my field.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src="/images/IMGL2860.jpg" className="card img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>Web Developer &amp; Civil Engineer.</h3>
            <p className="fst-italic"> About me </p>
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
              <br />I have experience with modern frameworks like React, NextJs
              and Angular and responsive layouts with Bootstrap & Tailwind. I
              also have foundational knowledge in backend technologies like
              Node.js, Express.js, and MongoDB. As a Civil Engineer with 6+
              years of experience, I'm now a versatile and adaptable developer
              in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
