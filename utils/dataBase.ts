import { Sequelize } from "sequelize";

const sequelize = new Sequelize("todo_db", "root", "1384amiramir", {
    dialect: "mysql",
    host: "localhost",
});
export default sequelize;
