import React from 'react';
import { Spin } from 'antd';
import isEqual from 'lodash/isEqual';
import { isComponentClass } from './Secured';
// eslint-disable-next-line import/no-cycle

interface PromiseRenderProps<T, K> {
  ok: T;
