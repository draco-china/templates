/**
 * @desc token验证
 * @author Daker(Daker.zhou@gmail.com)
 */

import * as jwt from 'jsonwebtoken';
import CONF from '../config';

export default async (ctx: any, next: any) => {

  const token = ctx.request.header.authorization;

  if (!token) {
    ctx.throw(401, 'No token detected.');
  }

  let tokenContent: string | object | undefined;
