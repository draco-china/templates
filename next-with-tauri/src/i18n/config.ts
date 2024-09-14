import { DEFAULT_LANGUAGE } from '@/lib/constants';
import i18nrc from '../../.i18nrc';

export const fallbackLng = DEFAULT_LANGUAGE || i18nrc.entryLocale;

export const languages = i18nrc.outputLocales;
export const defaultNS = 'index';
