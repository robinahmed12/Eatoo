import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function DELETE(request, { params }) {
  const { id } = params;

  if (!ObjectId.isValid(id)) {
    return new Response(JSON.stringify({ message: "Invalid meal ID" }), {
      status: 400,
    });
  }

  try {
    const mealsCollection = await dbConnect("meals");
    const result = await mealsCollection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ message: "Meal not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ message: "Meal deleted successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Meal deletion error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}
