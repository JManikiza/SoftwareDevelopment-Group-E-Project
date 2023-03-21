'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-button.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-button.cjs.dev.js");
}
