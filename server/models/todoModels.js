import { Schema, model, models } from "mongoose";

const todoSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: String,
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const Todo = models.Todo || model("Todo", todoSchema);
export default Todo;
