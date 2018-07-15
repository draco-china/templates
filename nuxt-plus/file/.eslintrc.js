module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    "es6": true
  },
  parserOptions: {
    sourceType: 'module'
  },
  //  https:// github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  // extends: 'standard',
  //  required to lint *.vue files
  plugins: [
    'html'
  ],
  //  add your custom rules here
  rules: {

    /*Possible Errors*/

    // 数组和对象键值对最后一个逗号，

    // never参数：不能带末尾的逗号,

    // always参数：必须带末尾的逗号，

    // always-multiline：多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": [0, "never"],

    // 禁止在条件表达式中使用赋值语句
