import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.MONGODB_URI;

export default async function dbConnect(collectionName) {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  try {
    await client.connect();
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }

  return client.db(process.env.DB_NAME).collection(collectionName);
}
