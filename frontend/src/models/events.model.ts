export interface Event {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  location: string;
  fee: number;
  packages?: string[];
}

export const WebDevFundamentals: Event = {
  id: 1,
  title: "Web Development Fundamentals Workshop",
  description:
    "Join us for an interactive workshop on the basics of web development.",
  start_date: "2024-07-15",
  end_date: "2024-07-16",
  start_time: "09:00 AM",
  end_time: "03:00 PM",
  location: "123 Main Street, Cityville",
  fee: 20,
  packages: [
    "A solid foundational skill for Web Development ",
    "Leverage the power of AI to quickly learn how to code.",
    "Learn to build your own beautiful portfolio website",
  ],
};
