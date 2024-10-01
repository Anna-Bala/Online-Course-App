import { sql } from "@vercel/postgres";

export async function GET() {
  const client = await sql.connect();

  const { rows } = await client.sql`SELECT * FROM Testimonials;`;

  client.release();

  return Response.json(rows);
}
