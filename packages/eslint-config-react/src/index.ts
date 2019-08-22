export = {
  extends: [
    '@inabagumi',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier/react'
  ],
  overrides: [
    {
      files: '*.tsx',
      rules: {
        'react/prop-types': 'off'
      }
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
