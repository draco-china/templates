import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as Helmet from 'helmet';
import * as Compression from 'compression';
import * as BodyParser from 'body-parser';
