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
    "no-invalid-regexp": 2,

    // 禁止使用不合法或者不规则的空白符
    "no-irregular-whitespace": 2,

    // 在in操作符左边的操作项不能用! 例如这样写不对的：if ( !a in b) { // dosomething }
    "no-negated-in-lhs": 2,

    // 禁止把全局对象当函数调用，比如下面写法错误的：Math(), JSON()
    "no-obj-calls": 2,

    // 禁止在正则表达式字面量中使用多个空格 /foo bar/
    "no-regex-spaces": 2,

    // 禁止稀疏数组，清除多余的逗号申明  比如[1,,2]
    "no-sparse-arrays": 2,

    // 为了保证两行不相关的代码不会意外的被当做一行代码来解析
    "no-unexpected-multiline": 0,

    // 禁止有执行不到的代码
    "no-unreachable": 2,

    // 禁止和NaN作比较,推荐使用isNaN方法
    "use-isnan": 2,

    // 用来检测JSDoc是否完整和合法
    "valid-jsdoc": 2,

    // typeof操作符返回的结果会是 "undefined",  "object",  "boolean", "number", "string", 和  "function"之一。

    // 保证typeof 操作符返回的结果必须和上面六个字符串作比较
    "valid-typeof": 2,

    /*Best Practices*/

    // 在声明对象时getter和setter需成对出现
    "accessor-pairs": 2,

    // 数值方法的回调函数中强制写return语句
    "array-callback-return": 2,

    // 当在代码块中用var声明变量，并在代码块外使用时报错
    "block-scoped-var": 0,

    // 用来控制函数的复杂度，分支超过5时报错
    "complexity": [0, 5],

    // 不同分支的return语句不能返回不同的类型，要么一致要么都没有
    "consistent-return": 0,

    //  if else while for do后面的代码块是否需要{ }包围，参数：

    //  multi         只有块中有多行语句时才需要{ }包围

    //  multi-line    只有块中有多行语句时才需要{ }包围, 但是块中的执行语句只有一行时，块中的语句只能跟和if语句在同一行。

    //                 if (foo) foo++; else doSomething();

    //  multi-or-nest 只有块中有多行语句时才需要{ }包围, 如果块中的执行语句只有一行，执行语句可以另起一行也可以跟在if语句后面

    //  [2, "multi", "consistent"] 保持前后语句的{ }一致

    //  default: [2, "all"] 全都需要{ }包围
    "curly": 2,

    // 所有的switch语句都必须要有一个default分支
    "default-case": 2,

    //  在书写对象的属性或方法时，新的一行代码可以以. 开头，也可以以. 结束。

    //  强制统一object.key中 . 的位置，参数:

    //       property，'.'号应与属性在同一行

    //       object, '.' 号应与对象名在同一行
    "dot-location": [2, "property"],

    //  强制使用.号取属性

    //  参数： allowKeywords：true  使用保留字做属性名时，只能使用.方式取属性

    //                        false 使用保留字做属性名时, 只能使用[]方式取属性

    //                        e.g [2, {"allowKeywords": false}]

    //         allowPattern:  当属性名匹配提供的正则表达式时，允许使用[]方式取值,否则只能用.号取值

    //                        e.g [2, {"allowPattern": "^[a-z]+(_[a-z]+)+$"}]
    "dot-notation": [2, { "allowKeywords": true }],

    // 在进行比较时，必须使用全等=== 和完全不等!==
    "eqeqeq": [0, "allow-null"],

    // 在for-in 循环中要使用if语句
    "guard-for-in": 2,

    // 代码中禁止使用alert, confirm, and prompt
