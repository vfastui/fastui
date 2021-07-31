module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.js$': 'babel-jest',
        '^.+\\.[jt]sx?$': 'babel-jest'
    },
    globals: {
        'vue-jest': {
            babelConfig: false,
            tsConfig: {
                importHelpers: true
            }
        }
    }
}
