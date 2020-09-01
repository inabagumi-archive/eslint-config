export = {
  env: {
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'prettier'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint'
      ],
      files: ['*.ts']
    }
  ],
  parserOptions: {
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error'
  }
}
