const { ESLint } = require("eslint");
const path = require("path");
const config = require("./process-config");
const eslint = new ESLint({
  baseConfig: config,
});

eslint.calculateConfigForFile("./dummy.js").then((some) => {
  const { rules } = some;
  debugger;
});
