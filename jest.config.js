module.exports = {
  projects: [
    '<rootDir>/jest-configs/jest-test.config.js',
    '<rootDir>/jest-configs/jest-eslint.config.js',
  ],
  watchPlugins: [
    'jest-watch-typeahead',
    'jest-watch-master',
    'jest-watch-continue',
    'jest-watch-toggle-config',
  ],
};
