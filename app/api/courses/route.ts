import { sql } from "@vercel/postgres";

import type { Course, Lesson, Section } from "../types";

export async function GET() {
  const client = await sql.connect();

  const { rows } = await client.sql`
    SELECT 
        c.id AS "courseId",
        c.title AS "courseTitle",
        c.author,
        c.description,
        c.intro,
        c.level,
        c.weeks,
        cs.id AS "sectionId",
        cs.title AS "sectionTitle",
        cl.id AS "lessonId",
        cl.title AS "lessonTitle",
        cl.duration,
        ci.id AS "imageId",
        ci.url AS "imageUrl"
    FROM 
        courses c
    LEFT JOIN 
        course_sections cs ON c.id = cs.course_id
    LEFT JOIN 
        course_lessons cl ON cs.id = cl.section_id
    LEFT JOIN 
        course_images ci ON c.id = ci.course_id
    ORDER BY 
        c.id, cs.id, cl.id;`;

  client.release();

  const result: Course[] = [];

  rows.forEach(({ author, courseId, courseTitle, description, duration, imageUrl, intro, lessonId, lessonTitle, level, sectionId, sectionTitle, weeks }) => {
    let foundCourse = result.find((course) => course.id === courseId);

    if (!foundCourse) {
      foundCourse = {
        id: courseId,
        author,
        description,
        images: [],
        intro,
        level,
        title: courseTitle,
        weeks,
        sections: [],
      };
      result.push(foundCourse);
    }

    if (!foundCourse.images.includes(imageUrl)) foundCourse.images.push(imageUrl);

    let foundSection = foundCourse.sections.find((section: Section) => section.id === sectionId);

    if (!foundSection) {
      foundSection = {
        id: sectionId,
        title: sectionTitle,
        lessons: [],
      };
      foundCourse.sections.push(foundSection);
    }

    const lessonExists = foundSection.lessons.some((lesson: Lesson) => lesson.id === lessonId);

    if (!lessonExists) {
      foundSection.lessons.push({
        id: lessonId,
        title: lessonTitle,
        duration,
      });
    }
  });

  return Response.json(result);
}
