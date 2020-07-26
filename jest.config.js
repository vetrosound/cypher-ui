const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  roots: ['src/'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/cypher-ui'
};
