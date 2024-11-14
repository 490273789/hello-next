import { Suspense } from "react";

console.log("Suspense Server");
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const PostFeed = async () => {
  await sleep(2000);
  return <div>Post Feed</div>;
};

const Weather = async () => {
  await sleep(10000);
  return <div>Weather</div>;
};

const Recommend = async () => {
  await sleep(5000);
  return <div>Recommend</div>;
};

export default function Page() {
  console.log("Suspense page");
  return (
    <section>
      <Suspense fallback={<p>Loading PostFeed Component ...</p>}>
        <PostFeed />
      </Suspense>
      <Suspense fallback={<p>Loading Weather Component ...</p>}>
        <Weather />
      </Suspense>
      <Suspense fallback={<p>Loading Recommend Component ...</p>}>
        <Recommend />
      </Suspense>
    </section>
  );
}
