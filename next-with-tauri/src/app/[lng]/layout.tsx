import { Noto_Sans as FontSans } from 'next/font/google';
import { BodyAnalytics, HeadAnalytics } from '@/analytics';
import { dir, languages } from '@/i18n';
import LayoutFooter from '@/layout/footer';
import { LayoutHeader } from '@/layout/header';
import LayoutScroll from '@/layout/scroll';
import { ReactQueryProvider } from '@/providers';
import { DEFAULT_SYSTEM_MODE, DEFAULT_THEME } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/sonner';
import '../../../tailwind.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export { metadata, viewport } from '@/lib/site';

export async function generateStaticParams() {
  return languages.map((lng: string) => ({ lng }));
