import { sql } from "@vercel/postgres";

export async function GET() {
  const client = await sql.connect();

  const { rows } = await client.sql`SELECT 
    id, 
    is_free AS "isFree", 
    monthly_price as "monthlyPrice", 
    yearly_price as "yearlyPrice", 
    available_features as "availableFeatures", 
    unavailable_features as "unavailableFeatures" FROM pricing_plans;`;

  client.release();

  return Response.json(rows);
}
