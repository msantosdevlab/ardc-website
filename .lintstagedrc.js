module.exports = {
  '*.{js,jsx,ts,tsx,css}': 'eslint --config .eslintrc.js --fix',
  '*.{js,jsx,ts,tsx,css}': 'jest --bail --findRelatedTests --passWithNoTests',
  '*': 'prettier --ignore-unknown --write --config .prettierrc'
};
