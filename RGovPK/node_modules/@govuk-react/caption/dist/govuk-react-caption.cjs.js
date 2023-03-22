'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-caption.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-caption.cjs.dev.js");
}
