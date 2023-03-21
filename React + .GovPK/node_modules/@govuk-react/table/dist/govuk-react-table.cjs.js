'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-table.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-table.cjs.dev.js");
}
