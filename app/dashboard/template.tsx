"use client";

import { ReactNode, useState } from "react";

export default function Template({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [count, setCount] = useState(0);

  return (
    <div className="border-2 border-sky-300 p-2">
      <h1>Template {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  );
}
