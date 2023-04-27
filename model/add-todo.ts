import fs from "fs";

import { dataPath } from "../utils/dataPath.js";

class Todo {
    constructor(public text: string, public id: number, public completed: boolean = false) {}
    save(callback: (erorr: NodeJS.ErrnoException | null) => void) {
        fs.writeFile(dataPath, JSON.stringify(this), (err) => {
            if (err) callback(err);
            else callback(null);
        });
    }
}

export default Todo;
