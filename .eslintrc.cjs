module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:mdx/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.mdx'],
      },
    },
    'mdx/code-blocks': true,
    'mdx/language-mapper': {},
  },
  plugins: ['react', '@typescript-eslint', '@jambit/typed-redux-saga', 'react-refresh'],
  overrides: [
    {
      files: ['*.mdx'],
      parser: 'eslint-mdx',
      extends: 'plugin:mdx/recommended',
    },
  ],
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@jambit/typed-redux-saga/use-typed-effects': 'error',
    '@jambit/typed-redux-saga/delegate-effects': 'error',
    'react/jsx-props-no-spreading': [
      'error',
      { exceptions: ['FieldText', 'FieldTextArea', 'FieldFileInput', 'MDXRemote', 'Component', 'Button'] },
    ],
    'react/function-component-definition': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'no-case-declarations': 'off',
    'no-undef': 'off',
    'no-use-before-define': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-vars': 'off',
    'no-debugger': 'warn',
    'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state'] }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'prettier/prettier': ['error', { printWidth: 120, trailingComma: 'all', singleAttributePerLine: true }],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'prefer-destructuring': 'off',
    'consistent-return': 'off',
  },
};
