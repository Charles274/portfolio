const SkillsSection = () => {
  return (
    <section id="skills" className="skills section-bg ">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <p>
            What sets me apart? This section highlights my technical and
            creative skills, showcasing my expertise in Web Development and
            Engineering, I've got the skills to drive your project forward. Take
            a look to see how my skills align with your needs.
          </p>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            {skills.slice(0, skills.length / 2).map((skill, index) => (
              <div key={index} className="progress">
                <SKillItem skill={skill.skill} value={skill.value} />
              </div>
            ))}
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            {skills.slice(skills.length / 2).map((skill, index) => (
              <div key={index} className="progress">
                <SKillItem skill={skill.skill} value={skill.value} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

type SkillItemProp = {
  skill: string;
  value?: number;
  iconClass?: string;
};

const SKillItem: React.FC<SkillItemProp> = ({ skill, value, iconClass }) => {
  return (
    <>
      <span className="skill">
        {skill} <i className={iconClass}>{`${value}%`}</i>{" "}
      </span>
      <div className="progress" role="progressbar" aria-label="Basic example">
        <div className="progress-bar" style={{ width: `${value}%` }}></div>
      </div>
    </>
  );
};

const skills: SkillItemProp[] = [
  {
    skill: "HTML",
    value: 100,
    iconClass: "bi bi-code-slash",
  },
  {
    skill: "CSS",
    value: 90,
    iconClass: "bi bi-palette",
  },
  {
    skill: "JavaScript",
    value: 85,
    iconClass: "bi bi-file-earmark-code",
  },
  {
    skill: "TypeScript",
    value: 85,
    iconClass: "bi bi-file-earmark-code",
  },
  {
    skill: "React",
    value: 90,
    iconClass: "bi bi-file-earmark-richtext",
  },
  {
    skill: "Angular",
    value: 85,
    iconClass: "bi bi-file-earmark-break",
  },
  {
    skill: "Bootstrap",
    value: 85,
    iconClass: "bi bi-bootstrap",
  },
  {
    skill: "Tailwind CSS",
    value: 80,
    iconClass: "bi bi-wind",
  },
  {
    skill: "Git & GitHub",
    value: 80,
    iconClass: "bi bi-git",
  },

  {
    skill: "Node.js",
    value: 70,
    iconClass: "bi bi-node-plus",
  },
  {
    skill: "Express.js",
    value: 70,
    iconClass: "bi bi-file-earmark-arrow-right",
  },
  {
    skill: "MongoDB",
    value: 55,
    iconClass: "bi bi-database",
  },
  {
    skill: "Responsive Web Design",
    value: 95,
    iconClass: "bi bi-display",
  },
  {
    skill: "Civil Engineering",
    value: 85,
    iconClass: "bi bi-building",
  },
];
