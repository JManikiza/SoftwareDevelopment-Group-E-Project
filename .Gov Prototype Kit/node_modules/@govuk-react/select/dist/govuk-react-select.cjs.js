'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-select.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-select.cjs.dev.js");
}
