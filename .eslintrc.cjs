/* eslint-env node */
module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁止使用console
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off', // 禁止使用debugger
    indent: ['error', 2], // 缩进2个空格
    quotes: ['error', 'single'], // 强制使用单引号
    semi: ['error', 'never'], // 禁止使用分号
    'comma-dangle': 'off', // 关闭对象字面量项尾不能有逗号
    'vuejs-accessibility/click-events-have-key-events': 0, // 关闭禁止使用click事件
    'vuejs-accessibility/mouse-events-have-key-events': 0, // 关闭禁止使用鼠标事件
    'import/no-extraneous-dependencies': 0, // 关闭引入依赖报错
    'vue/multi-word-component-names': 'off', // 允许多个单词的组件名
    'vue/html-indent': ['error', 2, {
      'attribute': 1,
      'baseIndent': 1,
      'closeBracket': 0,
      'alignAttributesVertically': true,
      'ignores': []
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'always',
        'normal': 'never',
        'component': 'always'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/no-v-html': 'off', // 允许使用v-html
    'vue/no-multiple-template-root': 'off', // 允许多个template根节点
  }
}
