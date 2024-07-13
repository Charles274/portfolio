import { PortfolioItem } from "../../models/portfolio";
import { CivilProjects } from "./civil-engineering/civil-projects";
import { WebDevProjects } from "./software-development/web-dev-projects";

export const AllProjects: PortfolioItem[] = [
  ...WebDevProjects,
  ...CivilProjects,
];
