import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { CareerApplication } from "@/lib/models";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, experience, position, message } = body;

    if (!name || !email || !phone || !position) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const db = await connectDB();
    if (db) {
      await CareerApplication.create({ name, email, phone, experience, position, message });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Career form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
