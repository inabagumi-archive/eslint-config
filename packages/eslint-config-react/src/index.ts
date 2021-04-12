export = {
  extends: ['@inabagumi'],
  overrides: [
    {
      extends: ['plugin:react-hooks/recommended'],
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    },
    {
      extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
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
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ]
}
