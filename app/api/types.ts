export type Benefit = {
  id: number;
  title: string;
  description: string;
};

export type CourseLesson = {
  id: number;
  title: string;
  duration: string;
};

export type CourseSection = {
  id: number;
  title: string;
  lessons: CourseLesson[];
};

export type Course = {
  id: number;
  author: string;
  description: string;
  images: string[];
  intro: string;
  level: "Beginner" | "Intermediate" | "Advance";
  title: string;
  weeks: number;
  sections: CourseSection[];
  isLiked: boolean;
};

export type Lesson = {
  id: number;
  title: string;
  duration: string;
};

export type PricingPlan = {
  id: number;
  isFree: boolean;
  monthlyPrice: number;
  yearlyPrice: number;
  availableFeatures: string[];
  unavailableFeatures: string[];
};

export type Section = {
  id: number;
  title: string;
  lessons: Lesson[];
};

export type Testimonial = {
  id: number;
  author: string;
  content: string;
};
