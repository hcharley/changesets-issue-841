/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { Config } from '@changesets-issue-841/config';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(Config.port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${Config.port}/${globalPrefix}`
  );
}

bootstrap();
