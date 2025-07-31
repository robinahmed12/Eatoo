import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";

export async function POST(request) {
  const payload = await request.json();
  const { name, email, password } = payload;

  if (!email || !password || !name) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  const userCollection = await dbConnect(collectionNamesObj.userCollection);
  const existingUser = await userCollection.findOne({ email });

  if (existingUser) {
    return NextResponse.json({ message: "User already exists" }, { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await userCollection.insertOne({
    name,
    email,
    password: hashedPassword,
    role: "user",
    createdAt: new Date(),
  });

  return NextResponse.json({ message: "User registered", insertedId: result.insertedId }, { status: 201 });
}
