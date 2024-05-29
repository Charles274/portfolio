import { CategoryName } from "../../models/portfolio.model";
import { ResumeWorkItem } from "../../models/resume.model";

export const MNJWorkDuties = [
  "Designed and developed responsive and interactive user interfaces for web applications",
  "Implemented front-end logic using JavaScript, Typescript, HTML, CSS, and frameworks like React or Angular",
  "Created reusable UI components and maintained a consistent design language",
  "Collaborated with backend developers to integrate frontend code with APIs and backend services",
  "Troubleshot and debugged frontend issues using browser dev tools and debugging techniques",
  "Optimized website performance, accessibility, and SEO",
  "Implemented responsive design and mobile-first approaches to ensure cross-platform compatibility",
  "Worked with version control systems like Git to manage code repositories and collaborate with team members",
  "Participated in code reviews and ensured adherence to coding standards and best practices",
  "Stayed up-to-date with industry trends and emerging technologies in frontend development",
];

export const WorkExperiences: ResumeWorkItem[] = [
  {
    id: 1,
    position: "Frontend Developer",
    startDate: "Jan 2022",
    endDate: "May 2024",
    company: "MNJ Micro Systems",
    city: "Accra",
    country: "Ghana",
    category: CategoryName.Web,
    duties: [
      "Designed and developed responsive and interactive user interfaces for web applications",
      "Implemented front-end logic using JavaScript, Typescript, HTML, CSS, and frameworks like React or Angular",
      "Created reusable UI components and maintained a consistent design language",
      "Collaborated with backend developers to integrate frontend code with APIs and backend services",
      "Troubleshot and debugged frontend issues using browser dev tools and debugging techniques",
      "Optimized website performance, accessibility, and SEO",
      "Implemented responsive design and mobile-first approaches to ensure cross-platform compatibility",
      "Worked with version control systems like Git to manage code repositories and collaborate with team members",
      "Participated in code reviews and ensured adherence to coding standards and best practices",
      "Stayed up-to-date with industry trends and emerging technologies in frontend development",
      "Developed the frontend for an innovative Artist Booking Platform called AGERMAX",
      "Collaborated with designers to translate designs into pixel-perfect UI components",
      "Implemented responsive layouts using Bootstrap and ensured cross-browser compatibility",
      "Utilized GIT and GITHUB for version control and collaboration with team members",
    ],
    projects: [
      {
        id: 1,
        title: "AGERMAX",
        description:
          "Agermax Artists Booking Platform is a comprehensive web application built using Next.js 13. It serves as a centralized platform for artists to showcase their work and connect with potential clients for bookings. The platform offers an intuitive user interface, allowing artists to create profiles, upload portfolios, manage bookings, and interact with clients seamlessly. As the frontend developer on this project, I was responsible for implementing the user interface, ensuring responsiveness across devices, and optimizing performance and integrated the API Services. The backend stack comprises Express.js and MongoDB, providing robust data management and authentication functionalities. Additionally, I contributed to building administrative features for users with administrative rights, enhancing the platform's functionality and usability. Visit for your reference https://app.agermax.com.",
      },
      {
        id: 2,
        title: "Maninjer Productivity Platform",
        description: `Developed the app front views and designs using Bootstrap, Typescript & AngularJS and also the app-back for the admin management system. Scripting for API Services and integration with Backend built with Django & PostgreSQL.
          Developed a comprehensive web-based productivity management platform designed to streamline various management systems with to promote efficiency across different domains. 
          The platform suits consists of Personal Management System: Goal setting, task management, calendar synchronization, and public interaction. 
          Hotel Management System: Reservation management, guest tracking, and personalized service interaction. Restaurant Management System: Menu management, order processing, and customer interaction. 
          Company Management System: Employee management, project tracking, and stakeholder communication. Association/Organization Management System: Member and event management, goal tracking, and public engagement. 
          Production Management System: Production scheduling, inventory tracking, and quality assurance.`,
      },
    ],
  },
  {
    id: 2,
    position: "Site Engineer; Drainage and Concrete Works",
    startDate: "May 2021",
    endDate: "June 2023",
    company: "SHIMIZU DAINIPON JOINT VENTURES (SDJV), SHIMIZU CORPORATION",
    city: "Assin Praso - Assin Fosu",
    country: "Ghana",
    category: CategoryName.Civil,

    duties: [
      "Led and supervised a team of 12-16 workers daily in the construction of civil works, ensuring adherence to design specifications",
      "Assisted the Construction Manager in coordinating and supervising site construction activities, presenting daily reports, and monitoring construction progress",
      "Managed site resources and materials, including the requisition and usage of materials for construction",
      "Organized daily safety toolbox meetings and enforced environmental, health, and safety standards in collaboration with safety officers",
      "Liaised with third parties, stakeholders, and local authorities to ensure compliance with local construction regulations and by-laws",
      "Checked construction progress every day, report and monitor on how-to catch-up schedule if any delays",
      "Liaised with local authorities where appropriate to ensure compliance with local construction regulations and by-laws",
      "Liaised with Consultants, Sub-Contractors, Supervisors, Planners, Designers, Surveyors and General Workforce involved in the project",
      "Worked together with HSE staff to enforce environmental, health and safety standards at all times",
      "Performed miscellaneous job-related duties as assigned by Construction Manager and other Supervisors from time to time",
      "Cross trained colleagues, especially new employees on Companies standards and work procedures, adding value to colleagues from time to time",
    ],
  },
  {
    id: 3,
    position: "Assistant Structural Engineer & Quality Control",
    startDate: "Jan 2021",
    endDate: "May 2021",
    company: "ARCHITECTURAL AND ENGINEERING SERVICE LTD (A.E.S.L)",
    city: "Kumasi",
    country: "Ghana",
    category: CategoryName.Civil,
    duties: [
      "Assisted the Structural Engineer in collaborating with clients and other professional stakeholders",
      "Provided Consulting services and ensuring quality of work",
      "Conducted building assessment exercises and prepared structural integrity reports",
      "Calculated material quantities for effective material requisition in construction",
      "Ensured safety and progress of construction projects by liaising with the general workforce on-site",
      "Prepared work schedules and assisted in the preparation of reports and schedules for project management",
    ],
  },

  {
    id: 4,
    position: "Assistant Site Supervisor",
    startDate: "2020-11-01",
    endDate: "2021-01-01",
    company: "JUBILEE CONTRACTORS",
    city: "Kumasi",
    country: "Ghana",
    category: CategoryName.Civil,

    duties: [
      "Assisted in supervising road construction projects and coordinated work activities and site labour",
      "Provided documented site reports to the project manager, conducted routine site safety and progress meetings",
      "Collaborated with surveyors, artisans, and subcontractors to coordinate site construction activities",
      "Managed the requisition and effective use of materials for construction",
      "Cross-trained colleagues on interpreting construction design drawings and report production",
    ],
  },

  {
    id: 5,
    position: "Site Engineer & Documentation Officer",
    startDate: "2020-05-01",
    endDate: "2020-11-01",
    company: "LEADCOM GHANA LTD",
    city: "Kumasi",
    country: "Ghana",
    category: CategoryName.Civil,

    duties: [
      "Conducted field investigations, foundation mapping, and condition surveys for the maintenance of telecommunication towers and structures",
      "Conducted regular HSE training for general workers, ensuring a safe working environment",
      "Processed tower mapping field reports and produced draft tower designs using AutoCAD and Microsoft Excel",
      "Prepared and documented site reports based on field investigations",
      "Taught and cross-trained colleagues on engineering practices related to design, field investigations, and report production for telecommunication towers",
    ],
  },

  {
    id: 6,
    position: "Assistant Consulting Engineer",
    startDate: "2019-06-01",
    endDate: "2019-11-01",
    company: "ROCON ENGINEERING LTD",
    city: "Kumasi",
    country: "Ghana",
    category: CategoryName.Civil,

    duties: [
      "Conducted existing road condition surveys, reconnaissance surveys, and feasibility studies for road projects",
      "Performed site inspections and provided reports to consultants for decision-making processes",
      "Assisted in the production of geometric designs using AutoCAD Civil 3D, Microsoft Excel, Project, and Word",
      "Trained colleagues on field investigations, report documentation, Microsoft Project, AutoCAD, and other relevant skills",
    ],
  },
  {
    id: 7,
    position: "National Service Person",
    startDate: "2016-09-01",
    endDate: "2017-09-01",
    company: "Department of Urban Roads",
    city: "Kumasi",
    country: "Ghana",
    category: CategoryName.Civil,

    duties: [
      "Conducted existing road condition surveys, reconnaissance surveys, and feasibility studies for road projects",
      "Performed site inspections and provided reports to consultants for decision-making processes",
      "Assisted in the production of geometric designs using AutoCAD Civil 3D, Microsoft Excel, Project, and Word",
      "Trained colleagues on field investigations, report documentation, Microsoft Project, AutoCAD, and other relevant skills",
    ],
  },
  {
    id: 8,
    position: "Geotechnical Lab. Technician",
    startDate: "2015-06-01",
    endDate: "2015-08-01",
    company: "Building and Road Research Institute (CSIR/BRRI)",
    city: "Kumasi",
    country: "Ghana",
    duties: [],
    category: CategoryName.Civil,
  },
  {
    id: 9,
    position: "Geotechnical Lab. Technician",
    startDate: "2014-06-01",
    endDate: "2014-08-01",
    company: "Ghana Highway Authority",
    city: "Kumasi",
    country: "Ghana",
    duties: [],
    category: CategoryName.Civil,
  },
];
