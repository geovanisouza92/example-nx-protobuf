import { Module } from '@nestjs/common';
import { EchoController } from '../echo/echo.controller';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, EchoController],
  providers: [AppService],
})
export class AppModule {}
