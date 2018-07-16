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
    "no-cond-assign": 2,

    // 禁止使用console
    "no-console": 0,

    // 禁止在条件中使用常量表达式 if(true) if(1)
    "no-constant-condition": 2,

    // 禁止在正则表达式中使用控制符
    "no-control-regex": 2,

    // 禁止使用debugger语句
    "no-debugger": process.env.NODE_ENV === 'production' ? 2 : 0,

    // 函数参数禁止重名
    "no-dupe-args": 2,

    // 在创建对象字面量时不允许键重复
    "no-dupe-keys": 2,

    // 在switch语句中禁止重复的case
    "no-duplicate-case": 2,

    // 代码块的内容不能为空，禁止空代码块
    "no-empty": 2,

    // 正则表达式的内容不能为空，禁止使用不匹配任何字符串的正则表达式
    "no-empty-character-class": 2,

    // 禁止对catch语句中的异常进行赋值
    "no-ex-assign": 2,

    // 禁止不必要的bool转换
    "no-extra-boolean-cast": 2,

    // 禁止使用多余的圆括号
    "no-extra-parens": 2,

    // 禁止多余的冒号
    "no-extra-semi": 2,

    // 禁止重复的函数声明
    "no-func-assign": 2,

    // 禁止在块语句中声明变量或函数
    "no-inner-declarations": 2,

    // 禁止使用无效的正则语句
