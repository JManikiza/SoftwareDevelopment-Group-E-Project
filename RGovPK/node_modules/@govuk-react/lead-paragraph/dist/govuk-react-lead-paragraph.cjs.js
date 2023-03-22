'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-lead-paragraph.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-lead-paragraph.cjs.dev.js");
}
