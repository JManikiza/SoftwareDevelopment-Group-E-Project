'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-footer.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-footer.cjs.dev.js");
}
