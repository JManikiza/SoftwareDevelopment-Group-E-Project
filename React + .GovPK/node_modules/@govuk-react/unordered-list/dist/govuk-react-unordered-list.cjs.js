'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-unordered-list.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-unordered-list.cjs.dev.js");
}
