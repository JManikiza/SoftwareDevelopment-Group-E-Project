'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-tag.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-tag.cjs.dev.js");
}
