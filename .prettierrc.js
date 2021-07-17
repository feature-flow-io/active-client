'use strict';

module.exports = {
  singleQuote: true,
  printWidth: 80,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.hbs',
      options: {
        singleQuote: false,
      },
    },
  ],
};
