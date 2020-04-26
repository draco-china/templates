import { SearchOutlined } from '@ant-design/icons';
import { AutoComplete, Input } from 'antd';
import useMergeValue from 'use-merge-value';
import { AutoCompleteProps } from 'antd/es/auto-complete';
import React, { useRef } from 'react';

import classNames from 'classnames';
import styles from './index.less';

export interface HeaderSearchProps {
