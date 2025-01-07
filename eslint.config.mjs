import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettierConfig from "eslint-config-prettier";
import unusedImportsPlugin from "eslint-plugin-unused-imports";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  {
    ignores: [
      "**/eslint.config.js",
      "**/tamagui.config.ts",
      "**/babel.config.js",
      "src/drivers/api/*",
      "src/assets/*",
    ],
  },
  {
    plugins: { "unused-imports": unusedImportsPlugin },
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "error",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  prettierConfig
);

// import expoConfig from "eslint-config-expo";
// import prettierConfig from "eslint-config-prettier";
// import unusedImports from "eslint-plugin-unused-imports";

// export default [
//   expoConfig,
//   prettierConfig,
//   {
//     files: ["src/**/*.js", "src/**/*.jsx", "src/**/*.ts", "src/**/*.tsx"],
//   },
//   {
//     ignores: ["**/eslint.config.mjs", "src/drivers/api/*"],
//   },
//   {
//     plugins: ["prettier", "unused-imports"],
//     rules: {
//       "prettier/prettier": "error",
//       "no-unused-vars": "off",
//       "unused-imports/no-unused-imports": "error",
//       "unused-imports/no-unused-vars": [
//         "warn",
//         {
//           vars: "all",
//           varsIgnorePattern: "^_",
//           args: "after-used",
//           argsIgnorePattern: "^_",
//         },
//       ],
//     },
//   },
// ];
