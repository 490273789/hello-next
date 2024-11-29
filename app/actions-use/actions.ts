"use server";

import { revalidatePath } from "next/cache";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const data = ["阅读", "吃饭", "写作"];

export async function findToDos() {
  return data;
}

export async function createToDo(
  preState: { message: string },
  formData: FormData
) {
  await sleep(500);
  const todo = formData.get("todo");
  data.push(todo as string);
  revalidatePath("/actions-use");
  return { message: `add ${todo} success!` };
}
