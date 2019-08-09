export = {
  extends: [
    '@inabagumi',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react'
  ],
  overrides: [
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint'
      ],
      files: '*.tsx'
    }
  ],
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}
