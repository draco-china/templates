import * as path from 'path';
import * as StartServerPlugin from 'start-server-webpack-plugin';
import * as webpack from 'webpack';
import * as nodeExternals from 'webpack-node-externals';
import { Configuration, ExternalsElement } from 'webpack';

class WebpackConfig implements Configuration {
  target: Configuration['target'] = 'node';
