import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser';
import * as http from 'http';
import { router } from './routers/index';
import { error, cors } from './middleware';

const app = new Koa();

