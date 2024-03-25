export type JobItems = {
  id: number;
  title: string;
  badgeLetters: string;
  company: string;
  daysAgo: number;
  relevanceScore: number;
  date: string;
};

export type JobItemExpanded = JobItems & {
  description: string;
  qualifications: string[];
  reviews: string[];
  duration: string;
  location: string;
  salary: string;
  coverImgURL: string;
  companyURL: string;
};
