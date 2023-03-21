'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-fieldset.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-fieldset.cjs.dev.js");
}
