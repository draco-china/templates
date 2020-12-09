import { getAuthority } from './authority';

describe('getAuthority should be strong', () => {
  it('string', () => {
    expect(getAuthority('admin')).toEqual(['admin']);
  });
  it('array with double quotes', () => {
