'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-grid-row.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-grid-row.cjs.dev.js");
}
