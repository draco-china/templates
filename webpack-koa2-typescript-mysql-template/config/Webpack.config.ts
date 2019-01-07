import * as path from 'path';
import * as StartServerPlugin from 'start-server-webpack-plugin';
import * as webpack from 'webpack';
import * as nodeExternals from 'webpack-node-externals';
import { Configuration, ExternalsElement } from 'webpack';

class WebpackConfig implements Configuration {
  target: Configuration['target'] = 'node';
  mode: Configuration['mode'] = 'production';
  entry = [path.resolve(__dirname, '../server/app.ts')];
  output = {
    path: path.resolve(__dirname, '../dist'),
    filename: 'app.js'
  };
  externals: ExternalsElement[] = [];
  module = {
    rules: [
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              configFile: path.resolve(__dirname, '../tsconfig.json')
