module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 0,
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/destructuring-assignment': [0, 'always'],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'never',
      },
    ],
    'import/no-extraneous-dependencies': 'off',
  },
  settings: {
    'import/resolver': {
      node: {},
      typescript: {
        directory: './src',
      },
    },
  },
};
