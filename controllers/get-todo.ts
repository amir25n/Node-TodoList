import { Request, Response } from "express";

import Todo from "../model/add-todo.js";

export const addTodo = (req: Request, res: Response) => {
    if (!req.body.todo) return res.redirect("/");
    const todo = new Todo(req.body.todo, Math.floor(Math.random() * 1000));
    todo.save((erorr) => {
        if (erorr) console.log(erorr);
        else res.redirect("/");
    });
};
