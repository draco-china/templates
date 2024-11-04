import { BAIDU_ANALYTICS_ID } from '@/lib/constants';

export default function BaiduAnalytics() {
  return (
    BAIDU_ANALYTICS_ID && (
      <script
        dangerouslySetInnerHTML={{
          __html: `
            var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
