import js from '@eslint/js'
import globals from 'globals'
import { defineConfig } from 'eslint/config'
import prettier from 'eslint-plugin-prettier/recommended'

export default defineConfig([
  js.configs.recommended,
  prettier,
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { prettier },
    languageOptions: { globals: globals.browser },
    rules: {
      'prettier/prettier': 'error',
    },
  },
])
