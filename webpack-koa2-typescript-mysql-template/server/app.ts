import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser';
import * as http from 'http';
import { router } from './routers/index';
import { error, cors } from './middleware';

const app = new Koa();

app
  .use(bodyparser())  // 使用ctx.body解析
  .use(error) // 全局错误统一处理
  .use(cors)  // 跨域配置
  .use(router.routes())
  .use(router.allowedMethods());

// app.callback() 会返回一个能够通过http.createServer创建server的函数，类似express和connect。
