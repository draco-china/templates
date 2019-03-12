/**
 * @desc 跨域资源共享
 * @author Daker(Daker.zhou@gmail.com)
 */

export default async (ctx: any, next: any) => {
  // set Header
  const origin = ctx.origin || '';
