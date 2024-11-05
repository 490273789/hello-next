"use client";

// global-error.js is only enabled in production. In development, our error overlay will show instead.”，要生产环境，先build 再 start
export default function GlobalError({
  error,
  reset,
}: Readonly<{ error: Error; reset: () => void }>) {
  return (
    <html>
      <body>
        <h2>Something went wrong! </h2>
        <div>{error.message}</div>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
