import { proxy } from 'valtio';
import { DEFAULT_MODE, DEFAULT_SYSTEM_MODE, DEFAULT_THEME, isBrowser } from '@/lib/constants';
import { getCookie, setCookie } from '@/lib/cookies';

export interface GlobalState {
  currentMode?: 'light' | 'dark';
  systemMode?: 'light' | 'dark';
  mode: 'light' | 'dark' | 'system';
  theme:
    | 'zinc'
    | 'slate'
    | 'stone'
    | 'gray'
