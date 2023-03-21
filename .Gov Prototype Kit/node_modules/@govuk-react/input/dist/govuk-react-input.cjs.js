'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-input.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-input.cjs.dev.js");
}
