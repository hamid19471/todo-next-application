import dbConnect from "../../../server/utils/dbConnect";
import Todo from "../../../server/models/todoModels";

dbConnect();

export default async function handler(req, res) {
  if (req.method === "POST") {
    await Todo.create({
      title: req.body.title,
      description: req.body.description,
    });
    const todos = await Todo.find({});
    return res.status(201).json({ message: "todo added", todos });
  } else if (req.method === "GET") {
    const todos = await Todo.find({});
    return res.status(200).json({ todos });
  }
}
