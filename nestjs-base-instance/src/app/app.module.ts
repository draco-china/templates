import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '@/app/app.controller';
import { CorsMiddleware } from '@/common/middlewares/cors.middleware';
