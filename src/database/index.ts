import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    //configracoes relacionanas ao banco de dados
    type: "sqlite",
    database: ".src//database/db.sqlite",
    migrations: [
        "./src/database/migrations"
    ]
})
