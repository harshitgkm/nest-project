import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '.././orm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => typeOrmConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

//default
// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { UsersModule } from './src/modules/users/users.module';
// import { UsersModule } from './modules/users/users.module';

// @Module({
//   imports: [UsersModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
