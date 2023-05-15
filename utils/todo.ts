import fs from "fs";

import { dataPath } from "./dataPath.js";
import { Mtodo } from "./types.js";
import { get } from "http";

export const getTodo = (callback: (todos: Mtodo[]) => void) => {
    fs.readFile(dataPath, (err, data) => {
        if (err) {
            callback([]);
            console.log(err);
        } else callback(JSON.parse(data.toString()));
    });
};

export const saveTodo = (todos: Mtodo[], callback: (err: NodeJS.ErrnoException | null) => void) => {
    fs.writeFile(dataPath, JSON.stringify(todos), (err) => {
        if (err) callback(err);
        else callback(null);
    });
};

export const completedTodo = (callback: (l: number) => void) => {
    getTodo((todos) => {
        callback(todos.filter((t) => t.completed == true).length);
    });
};

export const reminingTodo = (callback: (l: number) => void) => {
    getTodo((todos) => {
        callback(todos.filter((t) => t.completed != true).length);
    });
};
