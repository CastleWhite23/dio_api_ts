import { DataSource } from "typeorm"

export const AppDataSource = new DataSource({
    //configracoes relacionanas ao banco de dados
    type: "sqlite",
    database: ".src//database/db.sqlite",
    migrations: [
        "./src/database/migrations"
    ]
})



AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })