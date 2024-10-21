const { createConfig } = require('semantic-release-config-gitmoji/lib/createConfig');

const options = {
  changelogTitle: `<a name="readme-top"></a>

# Changelog`,
  releaseRules: [
    {
      release: 'minor',
      type: 'feat',
    },
    {
      release: 'patch',
      type: 'fix',
    },
    {
      release: 'patch',
      type: 'perf',
    },
    {
      release: 'patch',
      type: 'style',
    },
    {
      release: 'patch',
      type: 'refactor',
    },
    {
