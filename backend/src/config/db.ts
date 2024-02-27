import { MONGO_URI } from "@/lib/constants";
import mongoose from "mongoose";

export async function connectToMongo(): Promise<typeof mongoose | null> {
  const dbName = MONGO_URI.split("/").pop();

  return mongoose
    .connect(MONGO_URI)
    .then((conn) => {
      console.log(`Connected to MongoDB (db: ${dbName})`);
      return conn;
    })
    .catch((err) => {
      console.error(err);
      return null;
    });
}

export async function disconnectMongo(): Promise<void> {
  return mongoose.connection.close();
}
