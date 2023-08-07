import Link from "next/link";
import Todolist from "../components/TodoList/TodoList";
import TodoForm from "../components/TodoForm/TodoForm";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/todos")
      .then(({ data }) => {
        setLoading(false);
        setData(data.todos);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const deleteTodo = (id) => {
    axios
      .delete(`/api/todos/${id}`)
      .then(({ data }) => {
        setData(data.todos);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const addTodo = (event, formData) => {
    event.preventDefault();
    axios
      .post("/api/todos", formData)
      .then(({ data }) => {
        setData(data.todos);
        setLoading(false);
        formData.title = "";
        formData.description = "";
      })
      .catch((err) => console.log(err.message));
  };

  if (loading) return <div className="container">Loading</div>;

  return (
    <div className="container">
      <header className="max-w-full flex items-center justify-between">
        <div className="text-4xl font-bold text-purple-600">
          <Link href="/">Todo</Link>
        </div>
        <div>
          <ul className="flex items-center justify-center gap-8 font-semibold">
            <li className="hover:text-purple-600 duration-300">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="hover:text-purple-600 duration-300">
              <Link href="/todos">Todos</Link>
            </li>
          </ul>
        </div>
      </header>
      <div className="flex flex-col gap-10 items-center justify-center my-20">
        <TodoForm onAdd={addTodo} />
        <div className="w-full">
          <Todolist data={data} onDelete={deleteTodo} />
        </div>
      </div>
    </div>
  );
}
