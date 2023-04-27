import express from "express";
import bodyParser from "body-parser";

import { staticsFile } from "./utils/statics.js";
import saveTodo from "./routes/Todo.js";

const app = express();

// Middelware
app.use(bodyParser.urlencoded({ extended: false }));
// End

// Statics
staticsFile(app);
// End of statics

// Ejs
app.set("view engine", "ejs");
app.set("views", "views");
// End of Ejs

// Routes
app.get("/", (req, res) => {
    res.render("index");
});

app.use("/admin", saveTodo);
// End of Routes

const port = 2000;
app.listen(port, () => console.log(`"server is runing on port ${port} "`));
