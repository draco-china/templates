import { YANDEX_ANALYTICS_ID } from '@/lib/constants';

export default function YandexAnalytics() {
  return (
    YANDEX_ANALYTICS_ID && (
      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
