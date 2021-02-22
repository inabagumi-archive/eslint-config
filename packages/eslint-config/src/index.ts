export = {
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      files: ['*.ts']
    }
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  }
}
