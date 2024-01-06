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
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
