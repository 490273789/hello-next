"use client";

import { ReactNode } from "react";

export default function Layout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <div className="border-2 border-blue-600 p-4">
      <h1 className="font-bold mb-2">Intercepting Layout</h1>

      {children}
      <div className="flex gap-5 mt-4">{modal}</div>
    </div>
  );
}
