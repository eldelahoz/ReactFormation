/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",
  verbose: true,
  setupFiles: ["./jest.setup.js"],
};
module.exports = config;
