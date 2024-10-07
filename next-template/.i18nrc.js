const { defineConfig } = require('@lobehub/i18n-cli');

module.exports = defineConfig({
  entry: './src/i18n/locales/en-US',
  entryLocale: 'en-US',
  output: './src/i18n/locales',
