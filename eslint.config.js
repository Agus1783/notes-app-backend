import globals from 'globals';
import daStyle from 'eslint-config-dicodingacademy';
import pluginJs from '@eslint/js';

export default [
  daStyle,
  { files: ['**/*.js'], languageOptions: { sourceType: 'module' } },
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];