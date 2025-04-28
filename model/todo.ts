import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema(
    {
        content: {
            type: String,
            require: true
        }
    },
    {
        timestamps: true
    }
)

const Todo = mongoose.model.Todo || mongoose.model("Todo",todoSchema)
export default Todo