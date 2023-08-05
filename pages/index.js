import Link from "next/link";
import useFetch from "../Hooks/useFetch/useFetch";
import Todolist from "../components/TodoList/TodoList";
import TodoForm from "../components/TodoForm/TodoForm";
export default function Home() {
  const { data, loading, error } = useFetch("/api/todos");
  if (loading) return <div className="container">Loading ...</div>;
  if (error) return console.log(error);
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
        <TodoForm />
        <Todolist data={data} />
      </div>
    </div>
  );
}
