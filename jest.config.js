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
    '!src/utils/apollo.ts',
    '!src/utils/apolloCache.ts',
    '!src/utils/getImageUrl.ts',
    '!src/types/**/*.d.ts',
    '!src/graphql/**/*.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
}
