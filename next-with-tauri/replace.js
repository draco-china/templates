const fs = require('fs');
const path = require('path');

const version = require('./package.json').version;

const replaceVersion = async () => {
  const tauriConfPath = path.resolve(__dirname, './src-tauri/tauri.conf.json');

  const tauriConf = fs.readFileSync(tauriConfPath, 'utf-8');
  const newTauriConf = tauriConf.replace(/"version": ".*"/, `"version": "${version}"`);
  fs.writeFileSync(tauriConfPath, newTauriConf);

  const cargoTomlPath = path.resolve(__dirname, './src-tauri/Cargo.toml');
  const cargoToml = fs.readFileSync(cargoTomlPath, 'utf-8');
  const newCargoToml = cargoToml.replace(/version = ".*"/, `version = "${version}"`);
  fs.writeFileSync(cargoTomlPath, newCargoToml);

  const outDir = path.resolve(__dirname, './out');
  console.log(fs.existsSync(outDir));
  if (fs.existsSync(outDir)) {
    const tauriConf = fs.readFileSync(tauriConfPath, 'utf-8');
    const newTauriConf = tauriConf.replace('npm run build', '');
    fs.writeFileSync(tauriConfPath, newTauriConf);
  }
};

replaceVersion();
