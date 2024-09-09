require("../envConfig.ts");
const { db } = require("@vercel/postgres");

const { benefits, courseImages, courseLessons, courses, courseSections, pricingPlans, testimonials } = require("./dataForSeed.ts");

async function seed() {
  const client = await db.connect();

  try {
    await client.sql`DROP TABLE IF EXISTS benefits;`;
    await client.sql`CREATE TABLE benefits (id SMALLSERIAL PRIMARY KEY, title VARCHAR(255) NOT NULL, description TEXT NOT NULL);`;

    await benefits.forEach(async (benefit) => {
      await client.sql`INSERT INTO benefits (title, description) VALUES
      (${benefit.title}, ${benefit.description});`;
    });

    await client.sql`DROP TABLE IF EXISTS testimonials;`;
    await client.sql`CREATE TABLE testimonials (id SMALLSERIAL PRIMARY KEY, author VARCHAR(255) NOT NULL, content TEXT NOT NULL);`;

    await testimonials.forEach(async (testimonial) => {
      await client.sql`INSERT INTO testimonials (author, content) VALUES
      (${testimonial.author}, ${testimonial.content});`;
    });

    await client.sql`DROP TABLE IF EXISTS pricing_plans;`;
    await client.sql`CREATE TABLE pricing_plans (
    id SMALLSERIAL PRIMARY KEY,
    is_free BOOLEAN,
    monthly_price DECIMAL(10, 2),
    yearly_price DECIMAL(10, 2),
    available_features TEXT[],
    unavailable_features TEXT[]);`;

    const pricingPlansQuery = `
    INSERT INTO pricing_plans 
    (is_free, monthly_price, yearly_price, available_features, unavailable_features)
    VALUES ($1, $2, $3, $4, $5)
  `;

    await pricingPlans.forEach(async (pricingPlan) => {
      await client.query(pricingPlansQuery, Object.values(pricingPlan));
    });

    await client.sql`DROP TABLE IF EXISTS courses cascade;`;
    await client.sql`CREATE TABLE courses (
    id SMALLSERIAL PRIMARY KEY,
    author VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    intro TEXT NOT NULL,
    level VARCHAR(50) NOT NULL,
    title VARCHAR(255) NOT NULL,
    weeks INT NOT NULL);`;

    await courses.forEach(async (course) => {
      await client.sql`INSERT INTO courses (author, description, intro, level, title, weeks) VALUES
      (${course.author}, ${course.description}, ${course.intro}, ${course.level}, ${course.title}, ${course.weeks});`;
    });

    await client.sql`DROP TABLE IF EXISTS course_images;`;
    await client.sql`CREATE TABLE course_images (
      id SMALLSERIAL PRIMARY KEY,
      course_id SMALLSERIAL,
      url VARCHAR(255) NOT NULL,
      FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE);`;

    await courseImages.forEach(async (courseImage) => {
      await client.sql`INSERT INTO course_images (course_id, url) VALUES
        (${courseImage.courseId}, ${courseImage.url});`;
    });

    await client.sql`DROP TABLE IF EXISTS course_sections cascade;`;
    await client.sql`CREATE TABLE course_sections (
      id SMALLSERIAL PRIMARY KEY,
      course_id SMALLSERIAL,
      title VARCHAR(255) NOT NULL,
      FOREIGN KEY (course_id) REFERENCES courses(id) ON DELETE CASCADE);`;

    await courseSections.forEach(async (courseSection) => {
      await client.sql`INSERT INTO course_sections (course_id, title) VALUES
          (${courseSection.courseId}, ${courseSection.title});`;
    });

    await client.sql`DROP TABLE IF EXISTS course_lessons;`;
    await client.sql`CREATE TABLE course_lessons (
      id SMALLSERIAL PRIMARY KEY,
      section_id SMALLSERIAL,
      title VARCHAR(255) NOT NULL,
      duration VARCHAR(50) NOT NULL,
      FOREIGN KEY (section_id) REFERENCES course_sections(id) ON DELETE CASCADE);`;

    await courseLessons.forEach(async (courseLesson) => {
      await client.sql`INSERT INTO course_lessons (section_id, title, duration) VALUES
            (${courseLesson.courseSectionId}, ${courseLesson.title}, ${courseLesson.duration});`;
    });

    console.log("Successfully added data to database");
  } catch (error) {
    console.error("Error while adding data to database:", error);
  } finally {
    client.release();
  }
}

seed();
