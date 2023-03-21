'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-details.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-details.cjs.dev.js");
}
