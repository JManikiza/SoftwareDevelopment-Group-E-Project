'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-inset-text.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-inset-text.cjs.dev.js");
}
