'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-constants.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-constants.cjs.dev.js");
}
