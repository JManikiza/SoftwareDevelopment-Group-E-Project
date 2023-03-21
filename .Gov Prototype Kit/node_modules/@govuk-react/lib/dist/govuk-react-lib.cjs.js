'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-lib.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-lib.cjs.dev.js");
}
