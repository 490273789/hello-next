"use client";

import { useActionState } from "react";
import { createToDo } from "./actions";
import SubmitButton from "./submit-button";

const initialState = { message: "" };

export default function AddToDoForm() {
  const [state, formAction] = useActionState(createToDo, initialState);
  return (
    <form action={formAction}>
      <input type="text" name="todo" />
      <SubmitButton />
      <p aria-live="polite">{state?.message}</p>
    </form>
  );
}
