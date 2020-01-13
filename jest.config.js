module.exports = {
  projects: [
    '<rootDir>/jest-configs/jest-test.config.js',
    '<rootDir>/jest-configs/jest-eslint.config.js',
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-master',
    'jest-watch-continue',
    'jest-watch-select-projects',
  ],
};
