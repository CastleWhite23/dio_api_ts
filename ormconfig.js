module.exports = {
    type: "sqlite",
    database: ".src//database/db.sqlite",
    cli: { //podemos atraves disso criar e manipular nossas tabelas
        migrationDir: "./src/database/migrations"
    }
}