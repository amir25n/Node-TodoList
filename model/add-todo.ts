import { getTodo, saveTodo } from "../utils/todo.js";
import { Mtodo } from "../utils/types.js";

class Todo {
    constructor(public text: string, public id: string, public completed: boolean = false) {}

    save(callback: (erorr: NodeJS.ErrnoException | null) => void) {
        getTodo((todos) => {
            if (todos.length < 1) {
                const todos: Mtodo[] = [];
                todos.push(this);
                saveTodo(todos, (err) => {
                    callback(err);
                });
            } else {
                todos.push(this);
                saveTodo(todos, (err) => {
                    callback(err);
                });
            }
        });
    }
    static getAllTodo(callback: (todos: Mtodo[]) => void): void {
        getTodo((todos) => {
            callback(todos);
        });
    }
    static deleteTodo(id: string, callback: (err: NodeJS.ErrnoException | null) => void) {
        getTodo((todos) => {
            saveTodo(
                todos.filter((t) => t.id !== id),
                (err) => {
                    callback(err);
                }
            );
        });
    }
    static completeTodo(id: string, callback: (err: NodeJS.ErrnoException | null) => void) {
        getTodo((todos) => {
            const indexTodo = todos.findIndex((t) => t.id == id);
            todos[indexTodo].completed = true;
            saveTodo(todos, (err) => {
                callback(err);
            });
        });
    }
}

export default Todo;
