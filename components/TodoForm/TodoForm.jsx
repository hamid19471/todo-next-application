const TodoForm = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 justify-center w-full">
      <form>
        <div className="flex gap-1 md:gat-5 items-start justify-start">
          <input
            className="border-purple-600 py-2 border-2 px-4 rounded-md font-bold w-full md:w-auto"
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter todo title"
          />
          <input
            className="border-purple-600 py-2 border-2 px-4 rounded-md font-bold w-full md:w-auto"
            type="text"
            name="description"
            id="description"
            placeholder="Enter description"
          />
        </div>
      </form>
      <button className="button">Add Todo</button>
    </div>
  );
};
export default TodoForm;
