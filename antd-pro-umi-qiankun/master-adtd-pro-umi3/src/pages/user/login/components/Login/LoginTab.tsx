import React, { useEffect } from 'react';
import { TabPaneProps } from 'antd/es/tabs';
import { Tabs } from 'antd';
import LoginContext, { LoginContextProps } from './LoginContext';

const { TabPane } = Tabs;

const generateId = (() => {
