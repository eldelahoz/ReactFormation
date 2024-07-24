/** @returns {Promise<import('jest').Config>} */
module.exports = async () => {
  return {
    verbose: true,
    setupFiles: ["./jest.setup.js"],
  };
};
