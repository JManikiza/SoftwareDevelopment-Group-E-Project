'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-error-summary.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-error-summary.cjs.dev.js");
}
