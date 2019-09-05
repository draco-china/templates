/**
 * @Description: 跨域资源共享
 * @Module: midddlrewares.cors
 * @Author: Daker
 * @Email: daker.zhou@gmail.com
 * @Github: https://github.com/daker-china
 * @Date: 2018-12-28 11:42:54
 * @LastEditTime: 2019-01-08 16:22:41
 */

import { Injectable, NestMiddleware, MiddlewareFunction, HttpStatus, RequestMethod } from '@nestjs/common';
import * as APP_CONFIG from '@/app/app.config';
import { isDevMode, isProdMode } from '@/app/app.environment';


@Injectable()
export class CorsMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (request, response, next) => {
      // 生产环境下，需要验证用户来源渠道，防止非正常请求
      if(isProdMode) {
        const { origin, referer } = request.headers;
        const checkHeader = field => !field || field.includes(APP_CONFIG.CROSS_DOMAIN.allowedReferer);
        const isVerifiedOrigin = checkHeader(origin);
        const isVerifiedReferer = checkHeader(referer);
        if (!isVerifiedOrigin && !isVerifiedReferer) {
          return response.status(HttpStatus.UNAUTHORIZED).json({
