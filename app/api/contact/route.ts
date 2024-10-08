import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, subject, message } = await request.json();

    await sql`
    INSERT INTO contact (first_name, last_name, email, phone, subject, message) VALUES
    (${firstName}, ${lastName}, ${email}, ${phone}, ${subject}, ${message});`;

    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
