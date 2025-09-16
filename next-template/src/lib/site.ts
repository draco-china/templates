import { Metadata, Viewport } from 'next';
import { languages } from '@/i18n';
import { SITE_URL } from './constants';

export const metadata: Metadata = {
  title: {
    default: 'Next.js | Next.js Template',
    template: 'Next.js | %s | Next.js Template',
  },
  other: {
    renderer: 'webkit',
  },
  manifest: '/site.webmanifest',
  icons: {
