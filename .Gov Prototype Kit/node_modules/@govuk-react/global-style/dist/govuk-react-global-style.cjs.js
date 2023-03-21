'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-global-style.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-global-style.cjs.dev.js");
}
