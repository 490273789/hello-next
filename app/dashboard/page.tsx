"use client";
import React from "react";
// import { use } from "react";

// async function getData() {
//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   return {
//     message: "Hello, Dashboard!",
//   };
// }

// export default function DashboardPage() {
//   const { message } = use(getData());
//   return <h1>{message}</h1>;
// }

console.log("Dashboard Client");
export default function Page() {
  const [error, setError] = React.useState(false);

  const handleGetError = () => {
    setError(true);
  };

  return (
    <>{error ? Error() : <button onClick={handleGetError}>Get Error</button>}</>
  );
}
