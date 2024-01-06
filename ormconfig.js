module.exports = {
    type: "sqlite",
    database: ".src//database/db.sqlite",
    migrations: [
        "./src/database/migrations"
    ],
    cli: { //podemos atraves disso criar e manipular nossas tabelas
        migrationDir: "./src/database/migrations"
    }
}