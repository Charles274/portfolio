import { WorkExperiences } from "../../data/resume/work-duties.model";
import { ResumeWorkItem } from "../../models/resume.model";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
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
              <h5>Nov 2023 - Jan 2024</h5>
              <p>
                <em>Free-Code-Camp Academy</em>
              </p>
            </div>
            <div className="resume-item">
              <h4>Bsc Civil Engineering</h4>
              <h5>May 2012 - July 2016</h5>
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

            {WorkExperiences.map((workExperience) => (
              <WorkExperienceItem workItem={workExperience} />
            ))}
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

interface Props {
  workItem: ResumeWorkItem;
}
const WorkExperienceItem: React.FC<Props> = ({ workItem }) => {
  return (
    <div className="resume-item">
      <h4>{workItem.position}</h4>
      <h5>
        {workItem.startDate} - {workItem.endDate}
      </h5>
      <p>
        <em>
          {workItem.company} - {workItem.city}
        </em>
      </p>
      <ul>
        {workItem.duties.map((duty) => (
          <ResumeListItem item={duty} />
        ))}
      </ul>
    </div>
  );
};
