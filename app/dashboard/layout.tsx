"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";

export default function Layout({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [count, setCount] = useState(0);
  return (
    <div className="border-2 border-blue-600 p-2">
      <div>
        <Link href="/dashboard/about">About</Link>
        <br />
        <Link href="/dashboard/settings">Settings</Link>
      </div>
      <h1>Layout {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {children}
    </div>
  );
}
