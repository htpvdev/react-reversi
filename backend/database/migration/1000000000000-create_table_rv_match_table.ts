import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateRvMatch1000000000000 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE IF NOT EXISTS "rv_match" (
          "id" SERIAL PRIMARY KEY
          , "black_user_id" INTEGER
          , "white_user_id" INTEGER
          , "current_board_json" VARCHAR(1000)
          , "result" SMALLINT
        )
        ;
      `,
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE IF EXISTS "rv_match";
      `,
    )
  }

}
