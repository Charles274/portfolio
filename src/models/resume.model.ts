export interface ResumeWorkItem {
  id: number;
  position: string;
  startDate: string;
  endDate: string;
  company: string;
  city: string;
  country?: string;
  duties: string[];
  category?: string;
}
