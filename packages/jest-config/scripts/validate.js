/* eslint-disable prefer-destructuring */
/* eslint-disable import/no-extraneous-dependencies */
// well. that obviously didn't work.
// need to look further in how they are using it

const validate = require("jest-validate").validate;
const config = require("..");

const result = validate(config, {});

console.log(result);
