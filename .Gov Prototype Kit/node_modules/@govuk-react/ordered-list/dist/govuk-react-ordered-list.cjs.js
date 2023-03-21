'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-ordered-list.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-ordered-list.cjs.dev.js");
}
