import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { courseId, userId } = await request.json();

    const sqlResponse = await sql`
    INSERT INTO users_courses (course_id, user_id) VALUES
    (${courseId}, ${userId});`;

    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { courseId, userId } = await request.json();

    if (!courseId || !userId) return NextResponse.json(null, { status: 400 });

    const sqlResponse = await sql`
      DELETE FROM users_courses WHERE course_id=${courseId} AND user_id=${userId};`;

    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
