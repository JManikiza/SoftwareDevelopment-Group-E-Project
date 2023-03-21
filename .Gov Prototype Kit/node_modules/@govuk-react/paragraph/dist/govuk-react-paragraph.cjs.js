'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-paragraph.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-paragraph.cjs.dev.js");
}
