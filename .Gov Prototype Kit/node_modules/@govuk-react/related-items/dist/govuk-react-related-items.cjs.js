'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-related-items.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-related-items.cjs.dev.js");
}
