module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testMatch: ['**/?(*.)+(spec|test).[t]s?(x)'],
    testPathIgnorePatterns: [
        '/example/cypress/',
        '/node_modules/',
        '/example/node_modules/',
        '/dist/',
        '/examples/dist/',
    ],
    moduleNameMapper: {
        '~/(.*)': '<rootDir>/src/$1',
        '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
        '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
};
