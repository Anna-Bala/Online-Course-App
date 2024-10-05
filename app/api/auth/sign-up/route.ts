import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { fullName, email, password } = await request.json();
    // todo - validate email and password

    const hashedPassword = await hash(password, 10);

    const databaseResponse = await sql`
    INSERT INTO users (full_name, email, password) VALUES
    (${fullName}, ${email}, ${hashedPassword});`;

    // todo - handle database response
  } catch (error) {}

  return NextResponse.json({ message: "success" });
}
