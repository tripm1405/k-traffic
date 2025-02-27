import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HttpModule } from '@nestjs/axios';
import HttpServiceConfig from './configs/http-service.config';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: 'sa',
      database: 'KTraffic',
      entities: [],
      extra: {
        trustServerCertificate: true,
      },
      synchronize: true,
    }),
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useClass: HttpServiceConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
