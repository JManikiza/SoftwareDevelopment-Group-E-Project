'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-document-footer-metadata.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-document-footer-metadata.cjs.dev.js");
}
