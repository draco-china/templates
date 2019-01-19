import * as path from 'path';
import * as StartServerPlugin from 'start-server-webpack-plugin';
import * as webpack from 'webpack';
import * as nodeExternals from 'webpack-node-externals';

const config: webpack.Configuration = {
  mode: 'development',
  entry: [
    'webpack/hot/signal',
    path.resolve(__dirname, '../server/app.ts')
