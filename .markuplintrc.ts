import type {Config} from '@markuplint/ml-config';

const config: Config = {
  specs: {
    "\\.[jt]sx?$": "@markuplint/react-spec"
  },
  parser: {
    "\\.[jt]sx?$": "@markuplint/jsx-parser"
  },
  extends: ['markuplint:recommended']
};

export default config;