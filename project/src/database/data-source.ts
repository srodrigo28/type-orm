import "reflect-metadata"
import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "db-type-orm",
    synchronize: true,
    logging: false,
    migrations: [],
    subscribers: [],
})
