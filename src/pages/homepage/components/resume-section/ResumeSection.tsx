import { useEffect, useState } from "react";
import { WorkExperiences } from "../../../../data/resume/work-duties.model";
import { ResumeWorkItem } from "../../../../models/resume.model";
import SeeMoreButton from "../../../../components/local/general-shared/see-more-button";

interface ResumeProps {
  displayAll: boolean;
}

const ResumeSection: React.FC<ResumeProps> = ({ displayAll = false }) => {
  const [showAll] = useState<boolean>(displayAll);
  const [workExperiences, setWorkExperiences] = useState<ResumeWorkItem[]>([]);

  useEffect(() => {
    if (!showAll) {
      setWorkExperiences(WorkExperiences.slice(0, 1));
      return;
    }
    setWorkExperiences(WorkExperiences);
  }, [displayAll, showAll]);

  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>
            "Experience, skills, and achievements - my resume tells the story of
            my professional journey. Take a look at my resume to see how my
            qualifications align with your needs and how I can contribute to
            your team's success."
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

            {workExperiences.map((workExperience, index) => (
              <div key={index} className="resume-item">
                <WorkExperienceItem workItem={workExperience} />
              </div>
            ))}

            {!showAll && (
              <div className="d-flex justify-content-end">
                <SeeMoreButton text="Read Full Resume" path="/resume" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;

export const ResumeListItem = ({ item }: { item: string }) => {
  return <>{item}</>;
};

export interface Props {
  workItem: ResumeWorkItem;
}

export const WorkExperienceItem: React.FC<Props> = ({ workItem }) => {
  return (
    <>
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
        {workItem.duties.map((duty, index) => (
          <li key={index} className="work-list-item">
            <ResumeListItem item={duty} />
          </li>
        ))}
      </ul>
    </>
  );
};
