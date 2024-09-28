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
    | 'neutral'
    | 'red'
    | 'rose'
    | 'orange'
    | 'green'
    | 'blue'
    | 'yellow'
    | 'violet'
    | string;
}

export const globalState = proxy<GlobalState>({
  systemMode: (getCookie('systemMode') || DEFAULT_SYSTEM_MODE) as GlobalState['systemMode'],
  mode: (getCookie('mode') || DEFAULT_MODE) as GlobalState['mode'],
  theme: (getCookie('theme') || DEFAULT_THEME) as GlobalState['theme'],
