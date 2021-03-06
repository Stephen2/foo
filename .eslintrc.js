// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  extends: [ "merit/frontend" ],  // <---- put your profile string here
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname
  },
  settings: {
    react: {
      "version": "16.9" // <----
    }
  }
};
