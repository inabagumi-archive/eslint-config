export = {
  extends: ['@inabagumi'],
  overrides: [
    {
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended',
        'prettier/react'
      ],
      files: ['*.jsx', '*.tsx'],
      rules: {
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off'
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
