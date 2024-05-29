import { CategoryName } from "./portfolio.model";

export interface ResumeWorkItem {
  id: number;
  position: string;
  startDate: string;
  endDate: string;
  company: string;
  city: string;
  country?: string;
  duties: string[];
  category?: CategoryName;
  projects?: ResumeWorkItemProject[];
}

export interface ResumeWorkItemProject {
  id?: number;
  title: string;
  description: string;
}
