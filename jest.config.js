const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  roots: ['src/'],
  collectCoverage: true,
  coverageReporters: ['html','lcov'],
  coverageDirectory: 'coverage/cypher-ui',
  testResultsProcessor: "jest-sonar-reporter"
};
