import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({ title: "", description: "" });

  const handlChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8 justify-center w-full">
      <form
        className="flex gap-1 md:gap-5 items-start justify-start"
        onSubmit={(event) => onAdd(event, formData)}
      >
        <div className="flex items-center justify-center gap1 md:gap-5">
          <input
            className="border-purple-600 py-2 border-2 px-4 rounded-md font-bold w-full md:w-auto"
            type="text"
            name="title"
            value={formData.title}
            onChange={handlChange}
            id="todo"
            placeholder="Enter todo title"
          />
          <input
            className="border-purple-600 py-2 border-2 px-4 rounded-md font-bold w-full md:w-auto"
            type="text"
            name="description"
            value={formData.description}
            onChange={handlChange}
            id="description"
            placeholder="Enter description"
          />
        </div>
        <button type="submit" className="button">
          Add Todo
        </button>
      </form>
    </div>
  );
};
export default TodoForm;
