'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-multi-choice.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-multi-choice.cjs.dev.js");
}
