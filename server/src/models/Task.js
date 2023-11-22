import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 1,
    },
    description: {
      type: String,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

const Task = mongoose.model("Tasks", TaskSchema);
export default Task;
