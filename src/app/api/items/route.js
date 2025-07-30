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
