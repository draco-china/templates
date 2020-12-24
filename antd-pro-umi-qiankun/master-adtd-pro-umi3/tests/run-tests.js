/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable eslint-comments/no-unlimited-disable */
const { spawn } = require('child_process');
// eslint-disable-next-line import/no-extraneous-dependencies
const { kill } = require('cross-port-killer');

const env = Object.create(process.env);
env.BROWSER = 'none';
env.TEST = true;
env.UMI_UI = 'none';
env.PROGRESS = 'none';
// flag to prevent multiple test
