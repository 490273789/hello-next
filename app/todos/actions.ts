"use server";

import { revalidatePath } from "next/cache";

const data = ["阅读《React 18 实战》", "学习 Next.js", "学习 Tailwind CSS"];

export async function findToDos() {
  return data;
}

export async function createToDo(formData: FormData) {
  const todo = formData.get("todo");
  data.push(todo as string);
  revalidatePath("/todos");
  // return data;
}
