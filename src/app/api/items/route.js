import dbConnect from "@/lib/dbConnect";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log(data);

    const mealsCollection = await dbConnect("meals"); // ✅ Await here
    const result = await mealsCollection.insertOne(data);

    return Response.json({ insertedId: result.insertedId });
  } catch (error) {
    console.error("Insert Error:", error);
    return Response.json({ error: "Failed to insert meal" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const mealsCollection = await dbConnect("meals"); // Connect to the "meals" collection
    const meals = await mealsCollection.find().toArray(); // Get all meals

    return Response.json(meals); // Return as JSON
  } catch (error) {
    console.error("GET meals error:", error);
    return Response.json({ error: "Failed to fetch meals" }, { status: 500 });
  }
}
