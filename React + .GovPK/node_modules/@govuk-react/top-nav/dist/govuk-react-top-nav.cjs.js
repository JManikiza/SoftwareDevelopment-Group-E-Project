'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-top-nav.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-top-nav.cjs.dev.js");
}
