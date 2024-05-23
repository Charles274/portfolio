import { MNJWorkDuties } from "../../data/resume/work-duties.model";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            3 years of experience in building dynamic, user-friendly web
            applications Expertise in React, Angular, and other modern
            frameworks Skilled in design implementation, responsive layouts, and
            collaboration Developed frontend for innovative Artist Booking
            Platform, AGERMAX Knowledge of backend technologies (Node.js,
            Express.js, MongoDB) for seamless integration Transitioned from
            civil engineering to tech industry through self-study and
            determination
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Charles Owusu</h4>
              <p>
                <em>
                  "Highly skilled and deadline-driven Frontend Web Developer and
                  Civil Engineer with 2+ years of experience in Web Development
                  & 6years in Civil Engineering. Proficient in designing and
                  developing user-centered Web Applications
                  <br />
                  <br />
                  Joining teams to deliver projects on time, within budget, and
                  with a focus on quality and safety. Possesses strong
                  leadership, teamwork, communication, and organizational
                  skills, with a commitment to delivering exceptional results."
                </em>
              </p>
              <ul>
                <li>Madina, Accra, Ghana</li>
                <li>+233 544 803 023</li>
                <li>charles274@live.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education & Training</h3>
            <div className="resume-item">
              <h4>Responsive Web Design</h4>
              <h5>2023 - 2024</h5>
              <p>
                <em>Free-Code-Camp Academy</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Bsc Civil Engineering</h4>
              <h5>2012 - 2016</h5>
              <p>
                <em>
                  Kwame Nkrumah University of Science and Technology, Kumasi,
                  Ghana
                </em>
              </p>
              <p>Majored in Geo-technical Engineering</p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Frontend Web Developer</h4>
              <h5>Jan 2022 - May 2024</h5>
              <p>
                <em>MNJ Micro Systems, Accra, Ghana </em>
              </p>
              <ul>
                {MNJWorkDuties.map((duty) => (
                  <ResumeListItem item={duty} />
                ))}
              </ul>
            </div>
            <div className="resume-item">
              <h4>Graphic design specialist</h4>
              <h5>2017 - 2018</h5>
              <p>
                <em>Stepping Stone Advertising, New York, NY</em>
              </p>
              <ul>
                <li>
                  Developed numerous marketing programs (logos,
                  brochures,infographics, presentations, and advertisements).
                </li>
                <li>
                  Managed up to 5 projects or tasks at a given time while under
                  pressure
                </li>
                <li>
                  Recommended and consulted with clients on the most appropriate
                  graphic design
                </li>
                <li>
                  Created 4+ design presentations and proposals a month for
                  clients and account managers
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;

export const ResumeListItem = ({ item }: { item: string }) => {
  return <li className="work-list-item">{item}</li>;
};
