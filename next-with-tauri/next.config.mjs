import nextPWA from 'next-pwa';

const ENV_KYES = [
  'DEFAULT_MODE',
  'DEFAULT_THEME',
  'DEFAULT_LANGUAGE',
  'SITE_URL',
  'API_URL',
  'EMAIL',
  'GITHUB_LINK',
  'TWITTER_LINK',
  'DISCORD_LINK',
  'INSTAGRAM_LINK',
  'LINKEDIN_LINK',
  'GOOGLE_TAG_MANAGER_ID',
  'GOOGLE_ANALYTICS_ID',
  'YANDEX_ANALYTICS_ID',
  'FACEBOOK_ANALYTICS_ID',
  'BAIDU_ANALYTICS_ID',
];

const env = Object.fromEntries(ENV_KYES.map((key) => [key, process.env[key]]));

const isProd = process.env.NODE_ENV === 'production';

let internalHost = null;

if (!isProd) {
  const { internalIpV4 } = await import('internal-ip');
  internalHost = await internalIpV4();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  env,
  // Ensure Next.js uses SSG instead of SSR
  // https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  output: 'export',
  // Note: This feature is required to use the Next.js Image component in SSG mode.
  // See https://nextjs.org/docs/messages/export-image-api for different workarounds.
  images: {
    unoptimized: true,
  },
  swcMinify: true,
  // Configure assetPrefix or else the server won't properly resolve your assets.
  assetPrefix: isProd ? undefined : `http://${internalHost}:3000`,
};

const withPWA = nextPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

export default withPWA(nextConfig);
