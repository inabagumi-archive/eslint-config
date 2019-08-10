export = {
  extends: ['@inabagumi'],
  overrides: [
    {
      extends: [
        'plugin:vue/essential',
        'prettier/vue'
      ],
      files: '*.vue',
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    }
  ]
}
