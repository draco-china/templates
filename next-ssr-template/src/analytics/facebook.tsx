import Script from 'next/script';
import { FACEBOOK_ANALYTICS_ID } from '@/lib/constants';

export default function FacebookAnalytics() {
  return (
    FACEBOOK_ANALYTICS_ID && (
      <>
        <Script
          async
          defer
          crossOrigin='anonymous'
          src='https://connect.facebook.net/en_US/sdk.js'
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
