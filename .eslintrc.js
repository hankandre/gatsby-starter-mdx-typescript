module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'xo',
    'xo-react',
    'xo-typescript',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
  ],
  plugins: ['react', 'jsx-a11y', 'jest'],
  env: {
    browser: true,
    es6: true,
  },
  globals: {
    graphql: false,
  },
  settings: {
    react: {
      version: 'detect',
    },
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
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    // Handled by Prettier.
    '@typescript-eslint/indent': 'off',
    'comma-dangle': 'off',
    'object-curly-spacing': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-tag-spacing': 'off',
    // Case-by-case rules
    '@typescript-eslint/explicit-function-return-type': 'off', // Re-enabled in 'overrides' for plain .ts extensions
    'capitalized-comments': 'off', //🤫
    'no-warning-comments': 'off', // TODOs can be helpful!

    '@typescript-eslint/no-explicit-any': 'error', // Better to have this on and turn it off it becomes problematic.
    // Spreading obfuscates the passage of props; especially in cases
    // of prop-drilling. Better to explicitly pass props or intentionally
    // ignore the spreading of props (see components/link/index.tsx)
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
        '@typescript-eslint/explicit-function-return-type': ['error'],
      },
    },
  ],
};
