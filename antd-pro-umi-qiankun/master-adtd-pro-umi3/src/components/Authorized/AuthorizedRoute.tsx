import { Redirect, Route } from 'umi';

import React from 'react';
import Authorized from './Authorized';
import { IAuthorityType } from './CheckPermissions';

interface AuthorizedRoutePops {
  currentAuthority: string;
  component: React.ComponentClass<any, any>;
  render: (props: any) => React.ReactNode;
  redirectPath: string;
  authority: IAuthorityType;
}

const AuthorizedRoute: React.SFC<AuthorizedRoutePops> = ({
  component: Component,
  render,
  authority,
  redirectPath,
