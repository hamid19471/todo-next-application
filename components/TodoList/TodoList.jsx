import {
  CheckIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";

const TodoList = ({ data, onDelete }) => {
  return (
    <div>
      {data.map((item) => (
        <div
          key={item.id}
          className="w-full flex items-center justify-between py-7 border-2 border-purple-600 rounded-xl px-6 my-5"
        >
          <div className="font-bold text-xl ">{item.title}</div>
          <div className="flex items-center justify-between gap-8">
            <CheckIcon className="w-6 h-6 text-green-500 cursor-pointer stroke-emerald-500" />
            <button onClick={() => onDelete(item.id)}>
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
