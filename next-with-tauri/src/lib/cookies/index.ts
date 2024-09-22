import type { NextRequest, NextResponse } from 'next/server';
import { parse, serialize } from 'cookie';
import type {
  AppRouterCookies,
  CookiesFn,
  CookieValueTypes,
  DefaultOptions,
  OptionsType,
  TmpCookiesObj,
} from './types';

const isClientSide = (): boolean => typeof window !== 'undefined';

const isCookiesFromAppRouter = (
  cookieStore: TmpCookiesObj | AppRouterCookies | undefined,
): cookieStore is AppRouterCookies => {
  if (!cookieStore) return false;
  return (
    'getAll' in cookieStore &&
    'set' in cookieStore &&
    typeof cookieStore.getAll === 'function' &&
    typeof cookieStore.set === 'function'
  );
};

const isContextFromAppRouter = (
  context?: OptionsType,
): context is { res?: NextResponse; req?: NextRequest; cookies?: CookiesFn } => {
  return (
    (!!context?.req && 'cookies' in context.req && isCookiesFromAppRouter(context?.req.cookies)) ||
    (!!context?.res && 'cookies' in context.res && isCookiesFromAppRouter(context?.res.cookies)) ||
    (!!context?.cookies && isCookiesFromAppRouter(context.cookies()))
  );
};

const transformAppRouterCookies = (cookies: AppRouterCookies): TmpCookiesObj => {
  const _cookies: Partial<TmpCookiesObj> = {};

  cookies.getAll().forEach(({ name, value }) => {
    _cookies[name] = value;
  });
  return _cookies;
};

const stringify = (value: any) => {
  try {
    if (typeof value === 'string') {
      return value;
    }
    const result = JSON.stringify(value);
