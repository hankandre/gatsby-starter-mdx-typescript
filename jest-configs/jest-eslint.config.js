module.exports = {
  runner: 'jest-runner-eslint',
  displayName: 'lint',
  rootDir: '..',
  testMatch: [
    '<rootDir>/**/*.{js,jsx,ts,tsx}',
    '!node_modules',
    '!public',
    '!.cache',
  ],
};
