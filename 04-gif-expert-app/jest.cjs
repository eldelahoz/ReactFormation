/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jest-environment-jsdom",
  verbose: true,
  setupFiles: ["./jest.setup.js"],
};
module.exports = config;
