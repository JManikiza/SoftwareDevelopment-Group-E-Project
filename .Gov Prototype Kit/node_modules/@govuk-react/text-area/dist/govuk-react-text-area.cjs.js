'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-text-area.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-text-area.cjs.dev.js");
}
