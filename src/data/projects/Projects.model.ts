import {
  CivilCategory,
  PortfolioItem,
  WebCategory,
} from "../../models/portfolio.model";

export const PortfolioProjects: PortfolioItem[] = [
  {
    id: 1,
    title: "Agermax Artists Booking Platform",
    category: WebCategory,
    description:
      "Agermax Artists Booking Platform is a comprehensive web application built using Next.js 13. It serves as a centralized platform for artists to showcase their work and connect with potential clients for bookings. The platform offers an intuitive user interface, allowing artists to create profiles, upload portfolios, manage bookings, and interact with clients seamlessly. As the frontend developer on this project, I was responsible for implementing the user interface, ensuring responsiveness across devices, and optimizing performance. The backend stack comprises Express.js and MongoDB, providing robust data management and authentication functionalities. Additionally, I contributed to building administrative features for users with administrative rights, enhancing the platform's functionality and usability.",
    img: ["portfolio-1.jpg"],
    tags: ["React", "Next.js", "Express.js", "MongoDB"],
    projectUrl: "https://app.agermax.com",
    projectStartDate: new Date(2024, 0), // January 2024
    projectEndDate: new Date(2024, 3), // April 2024
    client: "Agermax",
  },
  {
    id: 2,
    title: "Maninjer Personal App",
    category: WebCategory,
    description:
      "Maninjer Personal App is a comprehensive web application designed to help users manage various aspects of their personal lives effectively. The app offers a range of features, including blog creation, portfolio management, goal setting and tracking, and resume generation. As the frontend developer on this project, I played a key role in designing and implementing the user interface using Angular and TypeScript. The application provides a user-friendly interface that allows users to navigate seamlessly between different sections and perform tasks efficiently. The backend stack includes technologies such as Express.js and MongoDB, providing robust data management capabilities and ensuring data security. The project commenced in March 2024 and was successfully completed by the end of April 2024.",
    img: ["portfolio-2.jpg"],
    tags: ["Angular", "TypeScript"],
    projectStartDate: new Date(2024, 2), // March 2024
    projectEndDate: new Date(2024, 3), // April 2024
    client: "Maninjer",
  },
  {
    id: 3,
    title: "Maninjer Hotel Management App",
    category: WebCategory,
    description:
      "Maninjer Hotel Management App is a sophisticated web application tailored for the hospitality industry, specifically designed to streamline hotel management operations. The app offers a comprehensive suite of features to facilitate efficient hotel management, including room booking and reservation management, guest check-in/check-out, housekeeping management, billing and invoicing, and reporting analytics. As the frontend developer on this project, I contributed to designing and implementing the user interface using Angular and TypeScript, ensuring a seamless and intuitive user experience. The backend architecture utilizes technologies such as Express.js and MongoDB, providing robust data storage and management capabilities. The project commenced in [Month Year] and was successfully completed within the specified timeframe.",
    img: ["portfolio-3.jpg"],
    tags: ["Angular", "TypeScript"],
    projectStartDate: new Date(/* Replace with actual start date */),
    projectEndDate: new Date(/* Replace with actual end date */),
    client: "Maninjer",
  },
  {
    id: 4,
    title: "Maninjer Restaurant Management App",
    category: WebCategory,
    description:
      "Maninjer Restaurant Management App is a sophisticated web application designed to streamline restaurant management operations. The app provides a comprehensive set of features to facilitate efficient restaurant management, including table booking and reservation management, order taking and processing, inventory management, staff scheduling and management, billing and invoicing, and reporting analytics. As the frontend developer on this project, I played a key role in designing and implementing the user interface using Angular and TypeScript, ensuring a seamless and intuitive user experience. The backend infrastructure leverages technologies such as Express.js and MongoDB, providing robust data storage and management capabilities. The project aimed to enhance operational efficiency and customer satisfaction for restaurants and food establishments. ",
    img: ["portfolio-4.jpg"],
    tags: ["Angular", "TypeScript"],
    projectStartDate: new Date(/* Replace with actual start date */),
    projectEndDate: new Date(/* Replace with actual end date */),
    client: "Maninjer",
  },
  {
    id: 5,
    title: "Project Five",
    category: CivilCategory,
    description: "Another mobi bile application project.",
    img: ["portfolio-5.jpg"],
  },
  {
    id: 6,
    title: "Project Six",
    category: CivilCategory,
    description: "Another graphic design project.",
    img: ["portfolio-6.jpg"],
  },
  {
    id: 7,
    title: "Project Seven",
    category: CivilCategory,
    description: "Yet another web development project.",
    img: ["portfolio-7.jpg"],
  },
  {
    id: 8,
    title: "Project Eight",
    category: CivilCategory,
    description: "Yet another mobi bile application project.",
    img: ["portfolio-8.jpg"],
  },
  {
    id: 9,
    title: "Project Nine",
    category: CivilCategory,
    description: "Yet another graphic design project.",
    img: ["portfolio-9.jpg"],
  },
];
