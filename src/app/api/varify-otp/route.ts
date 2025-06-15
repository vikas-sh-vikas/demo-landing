// app/api/send-otp/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const res = await fetch("http://www.mad3wo.com/api/verify-otp", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return NextResponse.json(data, { status: res.status });
}
