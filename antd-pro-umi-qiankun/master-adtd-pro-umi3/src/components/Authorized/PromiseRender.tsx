import React from 'react';
import { Spin } from 'antd';
import isEqual from 'lodash/isEqual';
import { isComponentClass } from './Secured';
// eslint-disable-next-line import/no-cycle

interface PromiseRenderProps<T, K> {
  ok: T;
  error: K;
  promise: Promise<boolean>;
}

interface PromiseRenderState {
  component: React.ComponentClass | React.FunctionComponent;
}

export default class PromiseRender<T, K> extends React.Component<
  PromiseRenderProps<T, K>,
  PromiseRenderState
> {
  state: PromiseRenderState = {
    component: () => null,
  };

  componentDidMount() {
    this.setRenderComponent(this.props);
  }

  shouldComponentUpdate = (nextProps: PromiseRenderProps<T, K>, nextState: PromiseRenderState) => {
    const { component } = this.state;
    if (!isEqual(nextProps, this.props)) {
      this.setRenderComponent(nextProps);
    }
    if (nextState.component !== component) return true;
    return false;
  };

  // set render Component : ok or error
  setRenderComponent(props: PromiseRenderProps<T, K>) {
    const ok = this.checkIsInstantiation(props.ok);
    const error = this.checkIsInstantiation(props.error);
    props.promise
      .then(() => {
        this.setState({
          component: ok,
        });
        return true;
      })
      .catch(() => {
        this.setState({
          component: error,
        });
      });
