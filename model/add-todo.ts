import { DataTypes } from "sequelize";

import sequelize from "../utils/dataBase.js";

const Todo = sequelize.define("Todo", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: true, //? default is true
        defaultValue: false,
    },
});

export default Todo;
