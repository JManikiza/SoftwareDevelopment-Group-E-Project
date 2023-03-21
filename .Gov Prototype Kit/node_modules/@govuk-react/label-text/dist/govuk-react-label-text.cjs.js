'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-label-text.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-label-text.cjs.dev.js");
}
