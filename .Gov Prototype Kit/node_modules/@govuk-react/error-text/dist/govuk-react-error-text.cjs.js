'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-error-text.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-error-text.cjs.dev.js");
}
