import { Request, Response } from "express";

import Todo from "../model/add-todo.js";
import { completedTodo, reminingTodo } from "../utils/todo.js";

export const indexRoutes = (req: Request, res: Response) => {
    completedTodo((completedTodo) => {
        reminingTodo((reminingTodo) => {
            Todo.getAllTodo((todos: object[]) => {
                res.render("index", {
                    todos,
                    completedTodo,
                    reminingTodo,
                });
            });
        });
    });
};
