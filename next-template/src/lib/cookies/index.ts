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
