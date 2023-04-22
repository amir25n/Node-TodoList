import express from "express";
import bodyParser from "body-parser";

import { staticsFile } from "./utils/statics.js";

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
// End of Routes

app.listen(8000, () => console.log(`"server is runing on port '8000' "`));
