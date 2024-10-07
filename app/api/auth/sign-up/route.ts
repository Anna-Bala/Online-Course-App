"use server";

import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  try {
    const { fullName, email, password } = await request.json();

    const hashedPassword = await hash(password, 10);

    await sql`
    INSERT INTO users (full_name, email, password) VALUES
    (${fullName}, ${email}, ${hashedPassword});`;

    return NextResponse.json(null, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}
