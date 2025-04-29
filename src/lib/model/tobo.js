import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema(
  {
    todo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Todo = mongoose.models.todo || mongoose.model("todo", TodoSchema);

export default Todo;
