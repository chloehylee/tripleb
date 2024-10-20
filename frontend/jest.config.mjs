export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',  // For CSS module imports
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],  // Optional for additional test setup
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],  // Ignore unnecessary files
};
