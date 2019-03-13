/**
 * @desc 跨域资源共享
 * @author Daker(Daker.zhou@gmail.com)
 */

export default async (ctx: any, next: any) => {
  // set Header
  const origin = ctx.origin || '';
  if (['http://localhost:3000'].includes(origin)) {
    ctx.set('Access-Control-Allow-Origin', origin);
