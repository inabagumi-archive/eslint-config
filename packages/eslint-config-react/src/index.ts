export = {
  extends: ['@inabagumi'],
  overrides: [
    {
      extends: [
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier/react'
      ],
      files: ['*.jsx', '*.tsx'],
      plugins: ['react-hooks'],
      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off'
        'react-hooks/exhaustive-deps': 'error',
        'react-hooks/rules-of-hooks': 'error'
      },
      settings: {
        react: {
          version: 'detect'
        }
      }
    },
    {
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint'
      ],
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ]
}
