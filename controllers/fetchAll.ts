import { Request, Response } from "express";

import Todo from "../model/add-todo.js";

export const indexRoutes = async (req: Request, res: Response) => {
    try {
        const todos = await Todo.findAll();
        const completedTodo = await Todo.count({ where: { completed: true } });
        res.render("index", {
            todos,
            completedTodo,
            reminingTodo: todos.length - completedTodo,
        });
    } catch (err) {
        console.log(err);
    }
};
