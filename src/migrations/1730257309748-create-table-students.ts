import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUsersTable1730256185726 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        CREATE TABLE students
        ("id" SERIAL NOT NULL,
        "email" character unique varying NOT NULL,
        "password" character varying NOT NULL,
        "age" INT
         );`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        DROP TABLE students;
        `);
  }
}
