"use client";

import Link from "next/link";
import { ReactNode } from "react";

export default function Layout({
  children,
  team,
  analytics,
}: {
  children: ReactNode;
  team: ReactNode;
  analytics: ReactNode;
}) {
  return (
    <div className="border-2 border-blue-600 p-4">
      <h1 className="font-bold mb-2">Person Layout</h1>
      <nav className="flex gap-4 p-2 bg-slate-300 rounded-md mb-4">
        <Link className="text-blue-600 underline" href="/person/page-views">
          Page Views
        </Link>
        <Link className="text-blue-600 underline" href="/person/visitors">
          Visitors
        </Link>
      </nav>
      {children}
      <div className="flex gap-5 mt-4">
        {team}
        {analytics}
      </div>
    </div>
  );
}
