module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react', 'react-hook', 'import'],
  env: {
    // 전역객체를 eslint가 인식하는 구간
    browser: true, // document나 window 인식되게 함
    node: true,
    es6: true,
  },
  extends: [
    'next/core-web-vitals', //eslint-config-next
    'prettier', //eslint-config-prettier
    'stylelint', //eslint-config-stylelint
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
  ],
};
