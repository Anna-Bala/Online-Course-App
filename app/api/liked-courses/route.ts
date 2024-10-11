import { sql } from "@vercel/postgres";

import type { Course, Lesson, Section } from "../types";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get("userId");

  const client = await sql.connect();

  const { rows } = await client.sql`
    SELECT 
        c.id,
        c.title,
        c.author,
        c.description,
        c.intro,
        c.level,
        c.weeks,
        ci.id AS "imageId",
        ci.url AS "imageUrl"
    FROM 
        courses c
    LEFT JOIN 
        course_images ci ON c.id = ci.course_id
    ORDER BY 
        c.id;`;

  const likedCoursesResponse = !!userId ? await client.sql`SELECT course_id as "courseId" FROM users_courses WHERE user_id=${userId};` : null;
  const likedCoursesRows = likedCoursesResponse?.rows;

  client.release();

  if (!likedCoursesRows?.length) return Response.json([]);

  const likedCoursesIds = likedCoursesRows.map(({ courseId }) => courseId);
  const likedCourses = rows.filter((course) => likedCoursesIds.includes(course.id));

  const result: Omit<Course, "sections" | "isLiked">[] = [];

  likedCourses.forEach(({ author, description, id, imageUrl, intro, level, title, weeks }) => {
    let foundCourse = result.find((course) => course.id === id);

    if (!foundCourse) {
      foundCourse = {
        id,
        author,
        description,
        images: [],
        intro,
        level,
        title,
        weeks,
      };
      result.push(foundCourse);
    }

    if (!foundCourse.images.includes(imageUrl)) foundCourse.images.push(imageUrl);
  });

  return Response.json(result);
}
