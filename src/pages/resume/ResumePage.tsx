// import ResumeSection from "../homepage/components/resume-section/ResumeSection";

import { useState } from "react";
import { WorkExperiences } from "../../data/resume/work-duties.model";
import { WorkExperienceItem } from "../homepage/components/resume-section/ResumeSection";

const ResumePage = () => {
  const [shownExperiences, setShownExperiences] = useState(WorkExperiences);
  const [resume, setResume] = useState("Web");

  const handleFilter: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const category = e.currentTarget.id;

    if (category === "All") {
      setResume("All");
      setShownExperiences(WorkExperiences);
      return;
    }

    if (category === "Web") {
      setResume(category);
    }

    if (category === "Civil") {
      setResume("Civil");
    }

    const filteredExperiences = WorkExperiences.filter(
      (exp) => exp.category === category
    );
    setShownExperiences(filteredExperiences);
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

            <div className="d-flex gap-2 justify-content-center mb-1">
              <button
                className={`btn btn-sm btn-outline-light d-flex gap-2 align-items-center ${
                  resume == "Web" && "active"
                }`}
                id="Web"
                onClick={handleFilter}
              >
                {"Filter Frontend Developer"}
                <i className="bi bi-funnel"></i>
              </button>
              <button
                className={`btn btn-sm btn-outline-light d-flex gap-2 align-items-center ${
                  resume == "Civil" && "active"
                }`}
                id="Civil"
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
                href={"/"}
                className="btn btn-sm btn-outline-light d-flex gap-2 align-items-center"
              >
                {"Download CV"}
                <i className="bi bi-box-arrow-down"></i>
              </a>
            </div>
          </div>

          <div className="row">
            {/* //If Not Web Category, Render this */}
            {resume != "Web" && (
              <>
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {shownExperiences
                    .slice(0, shownExperiences.length / 4)
                    .map((workExperience, index) => (
                      <div key={index} className="resume-item">
                        <WorkExperienceItem workItem={workExperience} />
                      </div>
                    ))}
                </div>
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {shownExperiences
                    .slice(shownExperiences.length / 4)
                    .map((workExperience, index) => (
                      <div key={index} className="resume-item">
                        <WorkExperienceItem workItem={workExperience} />
                      </div>
                    ))}
                </div>
              </>
            )}

            {/* //Display Single Column for Web Category */}
            {resume == "Web" && (
              <div
                className="col-lg-12"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {shownExperiences.map((workExperience, index) => (
                  <div key={index} className="resume-item">
                    <WorkExperienceItem workItem={workExperience} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* <ResumeSection displayAll={true} />; */}
      </section>
    </main>
  );
};

export default ResumePage;
