module.exports = {
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
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  plugins: ["import", "unicorn", "vue"],
  extends: ["plugin:vue/base"].concat(
    [
      "./configs/base",
      "./configs/import",
      "./configs/unicorn",
      "./configs/vue2",
      "./configs/vue3",
      "./configs/nuxt2",
    ].map((path) => require.resolve(path))
  ),
};
