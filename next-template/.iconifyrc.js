const {
  cleanupSVG,
  importDirectory,
  isEmptyColor,
  parseColors,
  runSVGO,
} = require('@iconify/tools');
const path = require('path');
const fs = require('fs').promises;

const svgPath = path.join(__dirname, 'icons');
const savePath = path.join(__dirname, './src/components/icon', 'local.json');

(async () => {
  // Import icons
  const iconSet = await importDirectory(svgPath, {
    prefix: 'local',
  });

  // Validate, clean up, fix palette and optimise
  iconSet.forEach((name, type) => {
    if (type !== 'icon') {
      return;
    }

    const svg = iconSet.toSVG(name);
    if (!svg) {
      // Invalid icon
