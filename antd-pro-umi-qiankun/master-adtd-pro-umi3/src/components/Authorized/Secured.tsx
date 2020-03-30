import React from 'react';
import CheckPermissions from './CheckPermissions';

/**
 * 默认不能访问任何页面
 * default is "NULL"
 */
const Exception403 = () => 403;

export const isComponentClass = (component: React.ComponentClass | React.ReactNode): boolean => {
  if (!component) return false;
  const proto = Object.getPrototypeOf(component);
  if (proto === React.Component || proto === Function.prototype) return true;
  return isComponentClass(proto);
};

// Determine whether the incoming component has been instantiated
// AuthorizedRoute is already instantiated
// Authorized  render is already instantiated, children is no instantiated
// Secured is not instantiated
const checkIsInstantiation = (target: React.ComponentClass | React.ReactNode) => {
  if (isComponentClass(target)) {
