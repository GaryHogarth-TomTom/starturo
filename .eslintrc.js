module.exports = {
  root: true,
  extends: ['handlebarlabs', 'plugin:prettier/recommended'],
  rules: {
    'no-use-before-define': 0,
    'react/style-prop-object': 0,
    'react/require-default-props': 0,
    'import/extensions': 0,
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': [
      'warn', // or "error"
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    quotes: [2, 'single', 'avoid-escape'],
  },
  globals: {
    __DEV__: 'readonly',
  },
  plugins: [],
};
