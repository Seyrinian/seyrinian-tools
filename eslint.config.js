import eslintJS from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  eslintJS.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    name: 'eslint-config-seyrinian-config',
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      // Add your own rules here
      'no-const-assign': 'warn',
      'no-constant-condition': 'warn',
      'no-console': 'error',
    },
  },
  {
    ignores: ['node_modules', 'dist/'],
  }
);
