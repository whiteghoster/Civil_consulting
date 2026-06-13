import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Newsletter } from "@/lib/models";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    const db = await connectDB();
    if (db) {
      try {
        await Newsletter.create({ email });
      } catch (err: any) {
        if (err.code === 11000) {
          // Already subscribed — treat as success
          return NextResponse.json({ success: true, message: "Already subscribed" }, { status: 200 });
        }
        throw err;
      }
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Newsletter error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
