'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-page.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-page.cjs.dev.js");
}
