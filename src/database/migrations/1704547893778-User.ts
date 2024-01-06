import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1704547893778 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({ //objeto da tabela
                name: "users",
                columns: [//array das colunas
                    {//objeto de cadacoluna
                        name: "id_user",
                        type: "string",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "string",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "string",
                        isNullable: false,
                        isUnique: true
                    },
                    {
                        name: "password",
                        type: "string",
                        isNullable: false
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
