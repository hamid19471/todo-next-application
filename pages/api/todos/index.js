import dbConnect from "../../../server/utils/dbConnect";
import Todo from "../../../server/models/todoModels";
dbConnect();

export default async function GET(req, res) {
  const todos = await Todo.find({});
  return res.status(200).json({ todos });
}
