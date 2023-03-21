'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-section-break.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-section-break.cjs.dev.js");
}
