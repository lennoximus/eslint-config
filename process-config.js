const baseConfig = {
  root: true,
  env: {
    node: true,
    browser: true,
    "shared-node-browser": true,
    worker: true,
    serviceworker: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    "./configs/base",
    "./configs/import",
    "./configs/unicorn",
    "./configs/nuxt2",
  ].map((path) => require.resolve(path)),
};

module.exports = baseConfig;
