import express from "express";
import bodyParser from "body-parser";

import { staticsFile } from "./utils/statics.js";
import sequelize from "./utils/dataBase.js";

import adminRoutes from "./routes/Todo.js";
import homeRoutes from "./routes/index.js";
import get404 from "./controllers/404.js";

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
app.use(homeRoutes);
app.use("/admin", adminRoutes);
app.use(get404);
// End of Routes

const port = 1000;

sequelize
    .sync()
    .then(() => {
        app.listen(port, () => console.log(`"server is runing on port ${port} "`));
    })
    .catch((err) => console.log(err));
