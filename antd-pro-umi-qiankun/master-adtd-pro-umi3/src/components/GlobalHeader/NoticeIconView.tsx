import React, { Component } from 'react';
import { Tag, message } from 'antd';
import { connect } from 'umi';
import groupBy from 'lodash/groupBy';
import moment from 'moment';
import { NoticeItem } from '@/models/global';
import { CurrentUser } from '@/models/user';
import { ConnectProps, ConnectState } from '@/models/connect';
import NoticeIcon from '../NoticeIcon';
import styles from './index.less';

export interface GlobalHeaderRightProps extends ConnectProps {
  notices?: NoticeItem[];
