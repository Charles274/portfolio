export interface PortfolioItem {
  id: number;
  title?: string;
  category?: Category;
  description?: string;
  images?: string[];
  tags?: string[]; // for filtering
  projectUrl?: string;
  projectStartDate: Date;
  projectEndDate: Date;
  client?: string;
}

export interface Category {
  name: CategoryName;
  iconClass?: string;
}

export enum CategoryName {
  All = "All",
  Web = "Web",
  Civil = "Civil",
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
