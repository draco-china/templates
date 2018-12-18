
if (process.env.NODE_ENV === 'production') {
  const OfflinePlugin = require('offline-plugin/runtime')
  window.onNuxtReady(() => {
