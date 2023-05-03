import fs from "fs";

import { dataPath } from "../utils/dataPath.js";

class Todo {
    constructor(public text: string, public id: number, public completed: boolean = false) {}

    save(callback: (erorr: NodeJS.ErrnoException | null) => void) {
        fs.readFile(dataPath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
            if (err) console.log(err);
            else {
                let todos: object[] = [];
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
    static getAllTodo(callback: (todos: object[]) => void): void {
        fs.readFile(dataPath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
            if (err) throw err;
            else {
                if (data.length < 5) {
                    return callback([]);
                } else {
                    const todos: object[] = JSON.parse(data?.toString());
                    callback(todos);
                }
            }
        });
    }
}

export default Todo;
