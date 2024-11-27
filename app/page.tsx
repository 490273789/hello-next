import { use } from "react";

export const revalidate = 10; // 设置重新验证频率为 10s

const getCatImage = async () => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  // const data = await res.json();
  return res.json();
};

export default function Home() {
  const data = use(getCatImage());
  return (
    <div className="">
      <h1>hello next.js</h1>
      <img src={data[0].url} width="300" alt="cat" />
    </div>
  );
}
