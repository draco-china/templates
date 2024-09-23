import type { IncomingMessage, ServerResponse } from 'http';
import type { cookies } from 'next/headers';
import type { NextRequest, NextResponse } from 'next/server';
import type { CookieSerializeOptions } from 'cookie';

export type OptionsType = DefaultOptions | AppRouterOptions;
export interface DefaultOptions extends CookieSerializeOptions {
  res?: ServerResponse;
