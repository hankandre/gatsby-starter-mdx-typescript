module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'kentcdodds',
    'kentcdodds/react',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  plugins: ['react', 'jsx-a11y', 'jest', '@typescript-eslint'],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    graphql: false,
  },
  settings: {
    'import/resolver': {
      node: {
        // Allow `eslint-plugin-imports` to resolve Typescript files.
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parserOptions: {
    ecmaVersion: '2018',
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off', // Re-enabled in 'overrides' for plain .ts extensions
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'capitalized-comments': 'off', //🤫
    'no-warning-comments': 'off', // TODOs can be helpful!
    'no-console': [
      'error', // Probably don't want console.logs in your production app and, if you do, you can ignore them.
      { allow: ['error', 'warn', 'info', 'debug', 'table'] },
    ],
    '@typescript-eslint/no-explicit-any': 'error', // Better to have this on and turn it off if it becomes problematic.
    // Spreading obfuscates the passage of props; especially in cases
    // of prop-drilling. Better to explicitly pass props or intentionally
    // ignore the spreading of props (see components/link/index.tsx)
    // on a component by component basis.
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
      },
    },
    {
      files: ['*.test.js'],
      rules: {
        'no-console': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};
