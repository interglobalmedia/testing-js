module.exports = {
    ...require('./test/jest-common'),
    collectCoverageFrom: ['**/src/**/*.js'],
    coverageThreshold: {
        global: {
            statements: 17,
            branches: 4,
            functions: 20,
            lines: 17,
        },
        './src/shared/utils.js': {
            statements: 100,
            branches: 80,
            functions: 100,
            lines: 100,
        },
    },
    projects: ['./test/jest.client.js', './test/jest.server.js'],
}