import 'jest';
import Index from '..';
import React from 'react';
import renderer, { ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

jest.mock('umi-plugin-locale');

describe('Page: index', () => {
  it('Render correctly', () => {
    const wrapper: ReactTestRenderer = renderer.create(<Index />);
    expect(wrapper.root.children.length).toBe(1);
