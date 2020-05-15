const { uniq } = require('lodash');
const RouterConfig = require('../../config/config').default.routes;

const BASE_URL = `http://localhost:${process.env.PORT || 8000}`;

function formatter(routes, parentPath = '') {
  const fixedParentPath = parentPath.replace(/\/{1,}/g, '/');
  let result = [];
