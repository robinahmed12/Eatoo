import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

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

    return new Response(
      JSON.stringify({ message: "Meal deleted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Meal deletion error:", error);
    return new Response(JSON.stringify({ message: "Internal server error" }), {
      status: 500,
    });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const body = await req.json();

  if (!ObjectId.isValid(id)) {
    return new Response(JSON.stringify({ message: "Invalid ID" }), {
      status: 400,
    });
  }

  try {
    const collection = await dbConnect("meals");

    // 🧼 Remove _id to prevent immutable field error
    delete body._id;

    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: body }
    );

    if (result.modifiedCount === 0) {
      return new Response(JSON.stringify({ message: "Nothing was updated" }), {
        status: 404,
      });
    }

    return new Response(
      JSON.stringify({ message: "Meal updated successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error updating meal:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
