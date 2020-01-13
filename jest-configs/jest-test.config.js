// eslint-disable-next-line @typescript-eslint/no-var-requires
module.exports = {
  displayName: 'test',
  rootDir: '..',
  transform: {
    '^.+\\.(tsx|jsx|js)$': '<rootDir>/jest-preprocess.js',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/file-mock.js',
  },
  testPathIgnorePatterns: [
    'node_modules',
    '\\.cache',
    '<rootDir>.*/public',
    '<rootDir>.*jest-configs',
  ],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'https://localhost',
  setupFiles: ['<rootDir>/loader-shim.js'],
  setupFilesAfterEnv: ['<rootDir>/test-setup.js'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
    'jest-watch-master',
    'jest-watch-continue',
  ],
};
