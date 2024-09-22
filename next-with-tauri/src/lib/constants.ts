export const isBrowser = () => typeof window !== 'undefined';

export const DEFAULT_LANGUAGE = process.env.DEFAULT_LANGUAGE;
export const DEFAULT_MODE = (process.env.DEFAULT_MODE || 'system') as 'light' | 'system' | 'dark';
export const DEFAULT_SYSTEM_MODE = DEFAULT_MODE === 'system' ? 'light' : DEFAULT_MODE;
export const DEFAULT_THEME = process.env.DEFAULT_THEME || 'blue';

export const SITE_URL = process.env.SITE_URL || 'http://localhost:3000';
export const API_URL = process.env.API_URL || '';

export const EMAIL = process.env.EMAIL;

export const GITHUB_LINK = process.env.GITHUB_LINK;
export const TWITTER_LINK = process.env.TWITTER_LINK;
export const DISCORD_LINK = process.env.DISCORD_LINK;
export const INSTAGRAM_LINK = process.env.INSTAGRAM_LINK;
