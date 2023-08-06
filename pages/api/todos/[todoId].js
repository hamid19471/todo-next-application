import { todos } from "../../../data/todos";

export default async function DELETE(req, res) {
  const { todoId } = req.query;
  if (req.method === "DELETE") {
    const findIndex = todos.findIndex((item) => item.id === parseInt(todoId));
    todos.splice(findIndex, 1);
  }
  return res.status(200).json({ message: "todo deleted", todos });
}
