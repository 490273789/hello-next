import { NextResponse } from "next/server";

const data = ["阅读", "跑步", "写代码"];

export async function GET() {
  return NextResponse.json({ data });
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const todos = formData.get("todo");
  data.push(todos as string);
  return NextResponse.json({ data });
}
