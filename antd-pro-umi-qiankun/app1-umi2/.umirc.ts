import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  base: '/app1',
  runtimePublicPath: false,
  publicPath: '/subapps/app1/',
  outputPath: '../dist/subapps/app1',
  mountElementId: 'app1',
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [{ path: '/', component: '../pages/index' }],
    },
  ],
  plugins: [
    [
      '@umijs/plugin-qiankun',
      {
        slave: {},
      },
    ],
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
