/*
 * @Description: your description
 * @Module: module.name
 * @Author: Draco
 * @Email: Draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2020-03-06 15:20:18
 * @LastEditTime: 2020-03-06 15:20:18
 */
/* eslint-disable import/no-extraneous-dependencies */
import { Reducer } from 'redux';
import { Effect, IRoute, qiankunStart } from 'umi';
import { query } from '@/services/base';

// function sleep(ms: number) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }

export interface App extends Partial<IRoute> {
  name: string; // hack
  entry: string;
  base: string;
  mountElementId: string;
}

export interface BaseModelState {
  name: 'Qiankun';
  apps: App[];
}

export interface BaseModelType {
  namespace: 'base';
  state: BaseModelState;
  effects: {
    [key: string]: Effect;
  };
  reducers: {
    [key: string]: Reducer<BaseModelState>;
  };
}

