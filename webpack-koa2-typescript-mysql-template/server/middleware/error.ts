/**
 * @desc 统一的try/catch错误捕捉入口
 * @author Daker(Daker.zhou@gmail.com)
 */

export default async (ctx: any, next: any) => {
  try {
    await next();
