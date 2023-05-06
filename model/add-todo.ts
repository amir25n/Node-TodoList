import fs from "fs";

import { dataPath } from "../utils/dataPath.js";

type Mtodo = {
    text: string;
    id: number;
    completed: boolean;
};
class Todo {
    constructor(public text: string, public id: number, public completed: boolean = false) {}

    save(callback: (erorr: NodeJS.ErrnoException | null) => void) {
        fs.readFile(dataPath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
            if (err) console.log(err);
            else {
                let todos: Mtodo[] = [];
                if (data.length < 5) {
                    todos.push(this);
                } else {
                    todos = JSON.parse(data.toString());
                    todos.push(this);
                }

                fs.writeFile(dataPath, JSON.stringify(todos), (err) => {
                    if (err) callback(err);
                    else callback(null);
                });
            }
        });
    }
    static getAllTodo(callback: (todos: Mtodo[]) => void): void {
        fs.readFile(dataPath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
            if (err) throw err;
            else {
                if (data.length < 5) {
                    return callback([]);
                } else {
                    const todos: Mtodo[] = JSON.parse(data.toString());
                    callback(todos);
                }
            }
        });
    }
    static deleteTodo(id: string, callback: (err: NodeJS.ErrnoException | null) => void) {
        fs.readFile(dataPath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
            if (err) throw err;
            else {
                const todos: Mtodo[] = JSON.parse(data.toString());
                const filteredTodo: Mtodo[] = todos.filter((todo) => todo.id != +id);
                fs.writeFile(dataPath, JSON.stringify(filteredTodo), (err: NodeJS.ErrnoException | null) => {
                    callback(err);
                });
            }
        });
    }
    static completedTodo(id: string, callback: (err: NodeJS.ErrnoException | null) => void) {
        fs.readFile(dataPath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
            if (err) throw err;
            else {
                const todos: Mtodo[] = JSON.parse(data.toString());

                const indexTodo = todos.findIndex((t) => t.id == +id);
                todos[indexTodo].completed = true;
                fs.writeFile(dataPath, JSON.stringify(todos), (err) => {
                    callback(err);
                });
            }
        });
    }
}

export default Todo;
