import mongoose from "mongoose";

const todo_schema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
    },
    completed: {
        type: Boolean,
        default: false,
        required: false,
    },
});
export const Todo = mongoose.model("todo_db", todo_schema);
