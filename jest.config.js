module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/**/mock.ts',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/utils/client.ts',
    '!src/types/**/*.ts',
    '!src/graphql/**/*.ts',
    '!src/pages/api/*.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
}
