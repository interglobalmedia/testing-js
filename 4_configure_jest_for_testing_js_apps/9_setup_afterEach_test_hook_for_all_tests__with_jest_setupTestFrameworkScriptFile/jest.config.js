module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '\\.module\\.css$': 'identity-obj-proxy',
        '\\.css$': require.resolve('./test/style-mock.js'),
    },
    setupFilesAfterEnv: ['<rootDir>/test/setup-tests.js'],
}