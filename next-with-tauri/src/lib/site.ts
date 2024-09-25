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
    icon: [
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        url: '/favicon.ico',
        sizes: '48x48',
      },
    ],
    apple: {
      url: '/apple-touch-icon.png',
    },
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
    languages: Object.fromEntries(languages.map((language) => [language, `/${language}`])),
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
