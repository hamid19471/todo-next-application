import {
  CheckIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import useToggle from "../../Hooks/useFetch/useToggle";

const TodoList = ({ data, onDelete, onComplete }) => {
  const [value, toggleValue] = useToggle(false);

  return (
    <div>
      {data.map((item) => (
        <div
          key={item._id}
          className="w-full flex items-center justify-between py-7 border-2 border-purple-600 rounded-xl px-6 my-5"
        >
          <div
            className={`${
              item.isCompleted
                ? "font-bold text-xl line-through text-slate-400"
                : "font-bold text-xl"
            }`}
          >
            {item.title}
          </div>
          <div className="flex items-center justify-between gap-8">
            <button onClick={() => onComplete(item._id)}>
              <CheckIcon className="w-6 h-6 text-green-500 cursor-pointer stroke-emerald-500" />
            </button>
            <button onClick={() => onDelete(item._id)}>
              <TrashIcon className="w-6 h-6 text-red-500 cursor-pointer" />
            </button>
            <PencilSquareIcon className="w-6 h-6 text-blue-700 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
};
export default TodoList;
