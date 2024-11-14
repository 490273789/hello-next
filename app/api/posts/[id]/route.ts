import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const field = request.nextUrl.searchParams.get("dataField");
  const { id } = await params;
  const res = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  ).json();
  const data = field ? { [field]: res[field] } : res;

  return NextResponse.json({ data });
}
