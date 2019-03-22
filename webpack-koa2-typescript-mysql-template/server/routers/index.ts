import * as Router from 'koa-router';

const router = new Router();

router.get('/*', async (ctx) => {
  ctx.body = {
    name: 'Koa2-TypeScript-Template',
