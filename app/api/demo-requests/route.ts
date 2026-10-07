import { NextResponse } from "next/server";
import { demoRequestSchema } from "@/lib/demoRequest";

// Server-only: where the API server lives (never sent to the browser)
const API_URL = (process.env.API_URL || "http://localhost:8080").replace(
  /\/$/,
  ""
);

// Receives the demo form and forwards it to the API server, which saves it.
// Going through this route keeps the API address private and avoids CORS.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  const parsed = demoRequestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { message: parsed.error.issues[0]?.message ?? "Invalid request" },
      { status: 400 }
    );
  }

  const data = parsed.data;
  try {
    const response = await fetch(`${API_URL}/demo-requests`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        full_name: data.fullName,
        email: data.email,
        phone: data.phone,
        company: data.company,
        business_type: data.businessType,
        number_of_branches: data.numberOfBranches || undefined,
        message: data.message || undefined,
      }),
      cache: "no-store",
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      console.error("Demo request rejected by API:", response.status, error);
      return NextResponse.json(
        { message: "We couldn't send your request. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Demo request: API unreachable", error);
    return NextResponse.json(
      { message: "We couldn't send your request. Please try again." },
      { status: 502 }
    );
  }
}
