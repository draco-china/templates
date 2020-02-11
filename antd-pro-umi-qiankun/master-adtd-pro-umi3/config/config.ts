import { defineConfig, utils } from 'umi';
import defaultSettings from './defaultSettings'; // https://umijs.org/config/
// import themePluginConfig from './themePluginConfig';
import proxy from './proxy';
import webpackPlugin from './plugin.config';
import { AppstoreOutlined } from '@ant-design/icons';

// const { pwa } = defaultSettings;
const { winPath } = utils;

// preview.pro.ant.design only do not use in your production ;
// preview.pro.ant.design 专用环境变量，请不要在你的项目中使用它。
const {
  // ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION,
  REACT_APP_ENV,
} = process.env;
// const isAntDesignProPreview = ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION === 'site';

// TODO:
// umi-plugin-pro-block umi-plugin-antd-theme umi-plugin-antd-icon-config 需要加
// @umijs/plugin-analytics 日志 log 应该开启后打印
// **/_mock.js 需不需要支持？

export default defineConfig({
  qiankun: {
    master: {
      defer: true,
      jsSandbox: true,
      prefetch: true,
      lifeCycles: {
        // see https://github.com/umijs/qiankun#registermicroapps
        afterMount: props => {
          console.log(props);
        },
      },
    },
  },
  hash: true,
  antd: {},
  // analytics: isAntDesignProPreview
  //   ? {
  //       ga: 'UA-72788897-6',
  //     }
  //   : false,
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  // pwa: pwa
  // ? {
  //     workboxPluginMode: 'InjectManifest',
  //     workboxOptions: {
  //       importWorkboxFrom: 'local',
  //     },
  //   }
  // : false,
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/zh/guide/router.html
  routes: [
    {
      path: '/user',
      component: '../layouts/UserLayout',
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/',
      component: '../layouts/SecurityLayout',
      routes: [
        {
          path: '/',
          component: '../layouts/BasicLayout',
          authority: ['admin', 'user'],
          routes: [
            {
              path: '/',
              redirect: '/welcome',
            },
            {
              path: '/welcome',
              name: 'welcome',
              icon: 'smile',
              component: './Welcome',
            },
            {
              path: '/admin',
              name: 'admin',
              icon: 'crown',
              component: './Admin',
              authority: ['admin'],
              routes: [
