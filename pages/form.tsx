import { useEffect, useState } from "react";

export default function Page() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await (await fetch("/api/todos")).json();
      console.log("[ data ] >", data);
      setTodos(data);
    };

    fetchData();
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("[ e.currentTarget ] >", new FormData(e.currentTarget));
    const response = await fetch("/api/todos", {
      method: "POST",
      body: new FormData(e.currentTarget),
    });
    const { data } = await response.json();

    setTodos(data);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" name="todo" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {todos.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </>
  );
}
