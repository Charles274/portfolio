export interface PortfolioItem {
  id: number;
  title?: string;
  category?: Category;
  location?: string;
  brief?: string;
  consultant?: string;
  description?: ProjectDescription;
  contractor?: string;
  position?: string;
  images?: string[];
  tags?: string[]; // for filtering
  projectUrl?: string;
  projectStartDate: Date;
  projectEndDate: Date;
  client?: string;
  status?: ProjectStatus;
}

export interface ProjectDescription {
  introduction?: string;
  key_responsibilities?: string[];
  conclusion?: string;
  collaboration?: string;
  key_features?: string[];
}

export interface Category {
  name: CategoryName;
  iconClass?: string;
}

export enum CategoryName {
  All = "All",
  Web = "Web Development",
  Civil = "Civil Engineering",
}

//Categories
export const WebCategory: Category = {
  name: CategoryName.Web,
  iconClass: "bi bi-laptop",
};

export const CivilCategory: Category = {
  name: CategoryName.Civil,
  iconClass: "bi bi-building",
};

export enum ProjectStatus {
  Complete = "Complete",
  Hold = "On Hold",
  Ongoing = "Ongoing",
}
