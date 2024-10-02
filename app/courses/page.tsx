import { getCourses } from "@/utils/getApiData";
import DetailedCourse from "@/components/DetailedCourse";
import PageHeader from "@/components/PageHeader";

import type { Course } from "../api/types";

export default async function Courses() {
  // const courses = await getCourses();
  const courses = [] as Course[];

  return (
    <main className="flex min-h-screen flex-col items-center px-4 lg:px-5 2xl:px-[30px]">
      <PageHeader
        title="Online Courses on Design and Development"
        info="Welcome to our online course page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience. Explore the courses below and find the perfect fit for your learning journey."
      />
      <div className="flex flex-col gap-5 w-full px-4 lg:px-[60px] 2xl:px-[142px] lg:gap-10 2xl:gap-[50px]">
        {courses?.map((course) => (
          <DetailedCourse course={course} key={course.id} />
        ))}
      </div>
    </main>
  );
}
