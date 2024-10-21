export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',  // For CSS module imports
  },
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],  // Ignore unnecessary files
};
