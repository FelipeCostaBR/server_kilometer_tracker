import { MigrationInterface, QueryRunner } from "typeorm";

export class 1635923365802CreateUsers1654343571669 implements MigrationInterface {
    name = '1635923365802CreateUsers1654343571669'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "users" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "name" character varying NOT NULL,
                "email" character varying NOT NULL,
                "date_birth" character varying NOT NULL,
                "phone" integer NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            CREATE TABLE "vehicles" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(),
                "user_id" uuid NOT NULL,
                "vehicle" character varying NOT NULL,
                "model" character varying NOT NULL,
                "year" character varying NOT NULL,
                "transmission" character varying NOT NULL,
                "registration" character varying NOT NULL,
                "current_kilometers" integer NOT NULL,
                "next_km_to_service" integer NOT NULL,
                "next_service" TIMESTAMP NOT NULL,
                "created_at" TIMESTAMP NOT NULL DEFAULT now(),
                "updated_at" TIMESTAMP NOT NULL DEFAULT now(),
                CONSTRAINT "REL_88b36924d769e4df751bcfbf24" UNIQUE ("user_id"),
                CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id")
            )
        `);
        await queryRunner.query(`
            ALTER TABLE "vehicles"
            ADD CONSTRAINT "FK_88b36924d769e4df751bcfbf249" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            ALTER TABLE "vehicles" DROP CONSTRAINT "FK_88b36924d769e4df751bcfbf249"
        `);
        await queryRunner.query(`
            DROP TABLE "vehicles"
        `);
        await queryRunner.query(`
            DROP TABLE "users"
        `);
    }

}
