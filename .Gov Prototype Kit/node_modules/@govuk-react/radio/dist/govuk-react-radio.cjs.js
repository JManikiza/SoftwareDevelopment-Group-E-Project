'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-radio.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-radio.cjs.dev.js");
}
