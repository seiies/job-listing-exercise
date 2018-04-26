module.exports = {
  collectCoverage: true,
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/']
  // For te case of desired external test server
  // globalSetup: '<rootDir>/jest.global.js'
}
