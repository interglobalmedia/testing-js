module.exports = {
    ...require('./jest-common'),
    displayName: 'dom',
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/test/setup-tests.js'],
}