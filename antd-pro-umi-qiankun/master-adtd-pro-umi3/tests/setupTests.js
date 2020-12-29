import 'jsdom-global/register';

// browserMocks.js
const localStorageMock = (() => {
  let store = {};

