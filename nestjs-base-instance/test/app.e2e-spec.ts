import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app/app.module';
import * as APP_CONFIG from './../src/app/app.config';

describe('AppController (e2e)', () => {
