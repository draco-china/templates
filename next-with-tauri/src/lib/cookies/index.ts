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
    return result;
  } catch (e) {
    return value;
  }
};

const decode = (str: string): string => {
  if (!str) return str;

  return str.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
};

export const getCookies = (options?: OptionsType): TmpCookiesObj => {
  if (isContextFromAppRouter(options)) {
    if (options?.req) {
      return transformAppRouterCookies(options.req.cookies);
    }
    if (options?.cookies) {
      return transformAppRouterCookies(options.cookies());
    }
  }

  let req;
  // DefaultOptions['req] can be casted here because is narrowed by using the fn: isContextFromAppRouter
  if (options) req = options.req as DefaultOptions['req'];

  if (!isClientSide()) {
    // if cookie-parser is used in project get cookies from ctx.req.cookies
    // if cookie-parser isn't used in project get cookies from ctx.req.headers.cookie

    if (req && req.cookies) return req.cookies;
    if (req && req.headers.cookie) return parse(req.headers.cookie);
    return {};
  }

  return parse(document.cookie) || {};
};

export const getCookie = (key: string, options?: OptionsType): CookieValueTypes => {
  const _cookies = getCookies(options);
  const value = _cookies[key];
  if (value === undefined) return undefined;
  return decode(value);
};

export const setCookie = (key: string, data: any, options?: OptionsType): void => {
  if (isContextFromAppRouter(options)) {
    const { req, res, cookies: cookiesFn, ...restOptions } = options;
    const payload = { name: key, value: stringify(data), ...restOptions };
    if (req) {
      req.cookies.set(payload);
    }
    if (res) {
      res.cookies.set(payload);
    }
    if (cookiesFn) {
