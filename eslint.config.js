// import someConfig from "some-other-config-you-use";
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  {
    // someConfig,
    extends: 'google',
    quotes: [2, 'single'],
    globals: {
      SwaggerEditor: false
    },
    env: {
      browser: true
    },
    rules:{
      "linebreak-style": ["error", (require("os").EOL === "\r\n" ? "windows" : "unix")]
    }
},
  eslintConfigPrettier,
];