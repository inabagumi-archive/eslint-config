export = {
  extends: ['@inabagumi', 'plugin:vue/essential', 'prettier/vue'],
  overrides: [
    {
      files: ['*.ts', '*.vue'],
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
}
