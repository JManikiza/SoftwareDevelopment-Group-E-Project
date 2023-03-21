'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-skip-link.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-skip-link.cjs.dev.js");
}
