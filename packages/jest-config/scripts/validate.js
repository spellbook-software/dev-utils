// well. that obviously didn't work.
// need to look further in how they are using it

const validate = require("jest-validate").validate;
const config = require("../index.js");

const result = validate(config, {});

console.log(result);
