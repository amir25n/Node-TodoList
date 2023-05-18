import { Request, Response } from "express";

import Todo from "../model/add-todo.js";

export const addTodo = async (req: Request, res: Response) => {
    if (!req.body.todo) return res.redirect("/");

    try {
        await Todo.create({ text: req.body.todo });
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
};
export const deleteTodo = async (req: Request, res: Response) => {
    try {
        await Todo.destroy({ where: { id: req.params.id } });
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
};

export const completeTodo = async (req: Request, res: Response) => {
    try {
        const todo: any = await Todo.findByPk(req.params.id);
        todo.completed = true;
        todo.save();
        res.redirect("/");
    } catch (err) {
        console.log(err);
    }
};
