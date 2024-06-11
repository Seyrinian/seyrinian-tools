import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
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
  },
];
