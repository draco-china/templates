import 'jest';
import Index from '..';
import React from 'react';
import renderer, { ReactTestInstance, ReactTestRenderer } from 'react-test-renderer';

jest.mock('umi-plugin-locale');

describe('Page: index', () => {
