import { Request, Response } from "express";

import Todo from "../model/add-todo.js";

export const indexRoutes = (req: Request, res: Response) => {
    Todo.getAllTodo((todos: object[]) => {
        res.render("index", {
            todos,
        });
    });
};
