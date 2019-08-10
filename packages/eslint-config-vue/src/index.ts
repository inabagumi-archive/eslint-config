export = {
  extends: ['@inabagumi'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
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
