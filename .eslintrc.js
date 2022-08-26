module.exports = {
  root: true,
  extends: ['handlebarlabs', 'plugin:prettier/recommended'],
  rules: {
    'no-use-before-define': 0,
    'react/style-prop-object': 0,
    'react/require-default-props': 0,
    'import/extensions': 0,
    quotes: [2, 'single', 'avoid-escape'],
  },
  globals: {
    __DEV__: 'readonly',
  },
  plugins: [],
};
