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
