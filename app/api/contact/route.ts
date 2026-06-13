import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { Contact } from "@/lib/models";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, city, service, budget, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const db = await connectDB();
    if (db) {
      await Contact.create({
        name,
        email,
        phone,
        company,
        city,
        service,
        budget,
        message,
        ip: req.headers.get("x-forwarded-for") || "unknown",
      });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
