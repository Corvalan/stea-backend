module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['dist/', 'node_modules/'], // Specify directories to ignore
  rules: {
    // Add custom ESLint rules here
    'no-cond-assign': ['error', 'always'],
    '@typescript-eslint/no-var-requires': 'off',
    // Add more rules as needed
  },
};
