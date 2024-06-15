import eslintConfig from '../eslint.config.js';
import prettierConfig from '../prettier.config.js';
import renovateConfig from '../renovate.json';
import tsConfig from '../tsconfig.json';
import commitlintConfig from '../commitlint.config.js';
import semanticReleaseConfig from '../release.config.js';

export const seyrinianConfig = {
  eslintConfig,
  prettierConfig,
  renovateConfig,
  tsConfig,
  commitlintConfig,
  semanticReleaseConfig,
} as Record<string, any>;
