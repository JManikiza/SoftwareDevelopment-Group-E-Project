'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-icons.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-icons.cjs.dev.js");
}
