import { Avatar, List } from 'antd';

import React from 'react';
import classNames from 'classnames';
import { NoticeIconData } from './index';
import styles from './NoticeList.less';

export interface NoticeIconTabProps {
  count?: number;
  name?: string;
  showClear?: boolean;
  showViewMore?: boolean;
  style?: React.CSSProperties;
  title: string;
  tabKey: string;
  data?: NoticeIconData[];
  onClick?: (item: NoticeIconData) => void;
  onClear?: () => void;
  emptyText?: string;
  clearText?: string;
  viewMoreText?: string;
  list: NoticeIconData[];
  onViewMore?: (e: any) => void;
}
const NoticeList: React.SFC<NoticeIconTabProps> = ({
  data = [],
  onClick,
  onClear,
  title,
