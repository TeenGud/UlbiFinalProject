import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import i18next from 'eslint-plugin-i18next';


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {rules: {
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "react/prop-types": "off"
  }},
  {
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  },
  i18next.configs['flat/recommended'],
  // {
  //   overrides: [
  //     {
  //       files: ['**/src/**/*.test.{ts,tsx}'],
  //       rules: {
  //         'i18next/no-literal-string': 'off'
  //       }
  //     }
  //   ]
  // }
];