import { Schema, model, models } from "mongoose";

const todoSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
});

const Todo = models.Todo || model("Todo", todoSchema);
export default Todo;
