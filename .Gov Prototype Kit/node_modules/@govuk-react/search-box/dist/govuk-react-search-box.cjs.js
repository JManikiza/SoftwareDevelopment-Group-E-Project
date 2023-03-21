'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-search-box.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-search-box.cjs.dev.js");
}
