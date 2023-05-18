import { Request, Response } from "express";

import Todo from "../model/add-todo.js";

export const indexRoutes = (req: Request, res: Response) => {
    Todo.count({ where: { completed: true } })
        .then((completedTodo) => {
            Todo.findAll().then((todos) => {
                res.render("index", {
                    todos,
                    completedTodo,
                    reminingTodo: todos.length - completedTodo,
                });
            });
        })
        .catch((err) => console.log(err));
};
