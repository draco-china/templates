import { Redirect, Route } from 'umi';

import React from 'react';
import Authorized from './Authorized';
import { IAuthorityType } from './CheckPermissions';

interface AuthorizedRoutePops {
  currentAuthority: string;
  component: React.ComponentClass<any, any>;
