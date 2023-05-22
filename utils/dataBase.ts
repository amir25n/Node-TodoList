import mongoose from "mongoose";

export const connectDataBase = () => {
    mongoose
        .connect("mongodb://localhost/todo_db")
        .then(() => console.log("data base is connected"))
        .catch((err) => console.log(err));
};
