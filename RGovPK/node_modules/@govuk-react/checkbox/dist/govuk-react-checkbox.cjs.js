'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-checkbox.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-checkbox.cjs.dev.js");
}
