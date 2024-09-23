import type { IncomingMessage, ServerResponse } from 'http';
import type { cookies } from 'next/headers';
import type { NextRequest, NextResponse } from 'next/server';
import type { CookieSerializeOptions } from 'cookie';

export type OptionsType = DefaultOptions | AppRouterOptions;
export interface DefaultOptions extends CookieSerializeOptions {
  res?: ServerResponse;
  req?: IncomingMessage & {
    cookies?: TmpCookiesObj;
  };
  cookies?: CookiesFn;
}
export type CookiesFn = typeof cookies;
export type AppRouterOptions = {
