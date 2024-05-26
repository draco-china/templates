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
      release: 'patch',
      type: 'build',
    },
    { release: 'patch', scope: 'README', type: 'docs' },
    { release: 'patch', scope: 'README.md', type: 'docs' },
    { release: false, type: 'docs' },
    {
      release: false,
      type: 'test',
    },
