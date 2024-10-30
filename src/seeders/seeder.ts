import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { DataSource } from 'typeorm';
import { StudentSeeder } from './students.seeder';

async function bootstrap() {
	const app = await NestFactory.createApplicationContext(AppModule);
	const dataSource = app.get(DataSource);
	await new StudentSeeder(dataSource).run();
	await app.close();
}

bootstrap();
// import { DataSource } from 'typeorm';
// import * as path from 'path';
// import * as fs from 'fs';
// import { config } from 'dotenv';

// config();

// const CreateDataSource = new DataSource({
// 	type: 'postgres',
// 	host: process.env.DATABASE_HOST,
// 	port: Number(process.env.DATABASE_PORT),
// 	username: process.env.DATABASE_USERNAME,
// 	password: process.env.DATABASE_PASSWORD,
// 	database: process.env.DATABASE_NAME,
// 	entities: ['src/modules/entities/*.entity{.ts,.js}'],
// });

// (async () => {
// 	const db = await CreateDataSource.initialize();
// 	console.log('--- Db connection established! ---\n');

// 	const seedersDirectory = path.resolve('src/seeders');
// 	const files = fs.readdirSync(seedersDirectory);

// 	for (const file of files) {
// 		const fullPath = `${seedersDirectory}/${file}`;

// 		if (fs.existsSync(fullPath) && fullPath.endsWith('.seeder.ts')) {
// 			const module = await import(fullPath);

// 			for (const key in module) {
// 				const seeder = module[key];

// 				if (typeof seeder === 'function') {
// 					console.log(
// 						`✔ Seeding data for "${file.split('.')[0]}" ::: Started!`,
// 					);
// 					await seeder(db);
// 					console.log(
// 						`✔ Seeding data for "${file.split('.')[0]}" ::: Complete!\n`,
// 					);
// 				}
// 			}
// 		}
// 	}

// 	await db.destroy();
// })();

// export { CreateDataSource };
