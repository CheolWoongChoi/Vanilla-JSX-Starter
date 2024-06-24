module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^.+\\.module\\.css$': '<rootDir>/mocks/styleMock.js',
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
