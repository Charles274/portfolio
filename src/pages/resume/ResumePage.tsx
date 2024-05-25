// import ResumeSection from "../homepage/components/resume-section/ResumeSection";

import { WorkExperiences } from "../../data/resume/work-duties.model";
import { WorkExperienceItem } from "../homepage/components/resume-section/ResumeSection";

const ResumePage = () => {
  return (
    <main id="main">
      <section id="resume" className="resume">
        <h3 className="resume-title">Professional Experience</h3>
        <div className="row">
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            {WorkExperiences.slice(0, WorkExperiences.length / 3).map(
              (workExperience, index) => (
                <div key={index} className="resume-item">
                  <WorkExperienceItem workItem={workExperience} />
                </div>
              )
            )}
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            {WorkExperiences.slice(WorkExperiences.length / 3).map(
              (workExperience, index) => (
                <div key={index} className="resume-item">
                  <WorkExperienceItem workItem={workExperience} />
                </div>
              )
            )}
          </div>
        </div>
        {/* <ResumeSection displayAll={true} />; */}
      </section>
    </main>
  );
};

export default ResumePage;
