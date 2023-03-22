'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-file-upload.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-file-upload.cjs.dev.js");
}
