import 'jest';
import BasicLayout from '..';
import React from 'react';
import renderer, { ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

describe('Layout: BasicLayout', () => {
  it('Render correctly', () => {
    const wrapper: ReactTestRenderer = renderer.create(<BasicLayout />);
