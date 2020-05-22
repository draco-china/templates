import { Button, message, notification } from 'antd';

import React from 'react';
import { formatMessage } from 'umi';
import defaultSettings from '../config/defaultSettings';

const { pwa } = defaultSettings;
// if pwa is true
if (pwa) {
  // Notify user if offline now
  window.addEventListener('sw.offline', () => {
    message.warning(formatMessage({ id: 'app.pwa.offline' }));
  });

  // Pop up a prompt on the page asking the user if they want to use the latest version
  window.addEventListener('sw.updated', (event: Event) => {
    const e = event as CustomEvent;
