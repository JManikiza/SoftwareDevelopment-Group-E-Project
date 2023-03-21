'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-date-field.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-date-field.cjs.dev.js");
}
