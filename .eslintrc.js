/**
 * [eslint rule docs](http://eslint.org/docs/rules/)
 */

module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  rules: {
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
  },
}
