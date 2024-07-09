const fs = require('fs');
const path = require('path');

const version = require('./package.json').version;

const replaceVersion = async () => {
  const tauriConfPath = path.resolve(__dirname, './src-tauri/tauri.conf.json');

  const tauriConf = fs.readFileSync(tauriConfPath, 'utf-8');
  const newTauriConf = tauriConf.replace(/"version": ".*"/, `"version": "${version}"`);
