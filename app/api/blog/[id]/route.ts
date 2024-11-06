import { NextRequest, NextResponse } from "next/server";

// app/dashboard/[team]/route.js
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = await params;
  console.log("[ id ] >", id);
  return NextResponse.json({ id });
}
