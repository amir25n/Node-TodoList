import { Request, Response } from "express";

import Todo from "../model/add-todo.js";

export const addTodo = (req: Request, res: Response) => {
    if (!req.body.todo) return res.redirect("/");

    Todo.create({ text: req.body.todo })
        .then(() => res.redirect("/"))
        .catch((err) => console.log(err));
};
export const deleteTodo = (req: Request, res: Response) => {
    Todo.destroy({ where: { id: req.params.id } })
        .then(() => res.redirect("/"))
        .catch((err) => console.log(err));
};

export const completeTodo = (req: Request, res: Response) => {
    Todo.findByPk(req.params.id)
        .then((todo: any) => {
            todo.completed = true;
            return todo.save();
        })
        .then(() => res.redirect("/"))
        .catch((err) => console.log(err));
};
