import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser';
import * as http from 'http';
import { router } from './routers/index';
import { error, cors } from './middleware';

const app = new Koa();

app
  .use(bodyparser())  // 使用ctx.body解析
  .use(error) // 全局错误统一处理
