import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const collectionNamesObj = {
  userCollection: "users",
};

export default async function dbConnect(collectionName) {
  if (!client.topology?.isConnected()) {
    // await client.connect();
    console.log("✅ MongoDB connected successfully");
  }
  return client.db(process.env.DB_NAME).collection(collectionName);
}
