import { Avatar, List } from 'antd';

import React from 'react';
import classNames from 'classnames';
import { NoticeIconData } from './index';
import styles from './NoticeList.less';

export interface NoticeIconTabProps {
  count?: number;
  name?: string;
  showClear?: boolean;
