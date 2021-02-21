export = {
  extends: ['@inabagumi', 'plugin:vue/essential'],
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
}
