export = {
  extends: ['@inabagumi', 'plugin:vue/essential', 'prettier/vue'],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
      ],
      files: '*.vue'
    }
  ]
}
