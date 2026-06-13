import mongoose from "mongoose";

interface GlobalMongoose {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var _mongoose: GlobalMongoose | undefined;
}

const MONGODB_URI = process.env.MONGODB_URI || "";

let cached: GlobalMongoose = global._mongoose || { conn: null, promise: null };

if (!global._mongoose) {
  global._mongoose = cached;
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) {
    console.warn("MONGODB_URI not set, DB features disabled");
    return null;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
