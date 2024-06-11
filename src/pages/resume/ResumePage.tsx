// import ResumeSection from "../homepage/components/resume-section/ResumeSection";

import { useState } from "react";
import { WorkExperiences } from "../../data/resume/work-duties.model";
import { WorkExperienceItem } from "../homepage/components/resume-section/ResumeSection";

const ResumePage = () => {
  const [shownExperiences] = useState(WorkExperiences);
  const [resume, setResume] = useState("All");

  const handleFilter: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const category = e.currentTarget.id;
    setResume(category);
  };

  return (
    <main id="main">
      <section id="resume" className="resume ">
        <div className="container">
          <div className="resume-title-wrapper text-center  mb-3">
            <h2 className="resume-title fs-2">CHARLES OWUSU AGYAPONG</h2>
            <h6 className=" resume-title fs-6">
              [ Frontend Developer | Civil Engineer ]
            </h6>
            <h3 className="resume-title ">Professional Experience</h3>

            <div className="d-flex gap-2 justify-content-center flex-wrap mb-1">
              <button
                className={`btn btn-sm btn-outline-light d-flex gap-2 align-items-center ${
                  resume == "Web Development" && "active"
                }`}
                id="Web Development"
                onClick={handleFilter}
              >
                {"Filter Frontend Developer"}
                <i className="bi bi-funnel"></i>
              </button>
              <button
                className={`btn btn-sm btn-outline-light d-flex gap-2 align-items-center ${
                  resume == "Civil Engineering" && "active"
                }`}
                id="Civil Engineering"
                onClick={handleFilter}
              >
                {"Filter Civil Engineer"}
                <i className="bi bi-funnel"></i>
              </button>
              <button
                className={`btn btn-sm btn-outline-light d-flex gap-2 align-items-center ${
                  resume == "All" && "active"
                }`}
                id="All"
                onClick={handleFilter}
              >
                {"See All"}
                <i className="bi bi-funnel "></i>
              </button>
              <a
                href={
                  "src/data/documents/resume/Engr Charles CV (May 2024 - WEB DEV).pdf"
                }
                className="btn btn-sm btn-outline-light d-flex gap-2 align-items-center"
              >
                {"Download CV"}
                <i className="bi bi-box-arrow-down"></i>
              </a>
            </div>
          </div>

          <div className="row">
            {/* //Display 2 Columns for All*/}
            {resume == "All" && (
              <>
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {WorkExperiences.slice(0, WorkExperiences.length / 4).map(
                    (workExperience, index) => (
                      <div key={index} className="resume-item">
                        <WorkExperienceItem
                          showProjects
                          workItem={workExperience}
                        />
                      </div>
                    )
                  )}
                </div>
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {WorkExperiences.slice(WorkExperiences.length / 4).map(
                    (workExperience, index) => (
                      <div key={index} className="resume-item">
                        <WorkExperienceItem
                          showProjects
                          workItem={workExperience}
                        />
                      </div>
                    )
                  )}
                </div>
              </>
            )}

            {/* //Display Single Column for Web Category */}
            {resume == "Web Development" && (
              <div
                className="col-lg-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {shownExperiences
                  .filter((exp) => exp.category === "Web Development")
                  .map((workExperience, index) => (
                    <div key={index} className="resume-item">
                      <WorkExperienceItem
                        showProjects
                        workItem={workExperience}
                      />
                    </div>
                  ))}
              </div>
            )}

            {/* //Display 2 Columns for All*/}
            {resume == "Civil Engineering" && (
              <>
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {WorkExperiences.filter(
                    (exp) => exp.category === "Civil Engineering"
                  )
                    .slice(0, WorkExperiences.length / 4)
                    .map((workExperience, index) => (
                      <div key={index} className="resume-item">
                        <WorkExperienceItem
                          showProjects
                          workItem={workExperience}
                        />
                      </div>
                    ))}
                </div>
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {WorkExperiences.filter(
                    (exp) => exp.category === "Civil Engineering"
                  )
                    .slice(WorkExperiences.length / 4)
                    .map((workExperience, index) => (
                      <div key={index} className="resume-item">
                        <WorkExperienceItem
                          showProjects
                          workItem={workExperience}
                        />
                      </div>
                    ))}
                </div>
              </>
            )}
          </div>
        </div>
        {/* <ResumeSection displayAll={true} />; */}
      </section>
    </main>
  );
};

export default ResumePage;
