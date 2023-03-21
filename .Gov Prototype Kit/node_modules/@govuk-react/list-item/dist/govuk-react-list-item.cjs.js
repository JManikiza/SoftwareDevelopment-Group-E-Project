'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-list-item.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-list-item.cjs.dev.js");
}
