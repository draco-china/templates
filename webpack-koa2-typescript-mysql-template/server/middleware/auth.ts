/**
 * @desc token验证
 * @author Daker(Daker.zhou@gmail.com)
 */

import * as jwt from 'jsonwebtoken';
import CONF from '../config';

export default async (ctx: any, next: any) => {

