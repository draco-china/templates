import React from 'react';
import CheckPermissions from './CheckPermissions';

/**
 * 默认不能访问任何页面
 * default is "NULL"
 */
const Exception403 = () => 403;

export const isComponentClass = (component: React.ComponentClass | React.ReactNode): boolean => {
  if (!component) return false;
