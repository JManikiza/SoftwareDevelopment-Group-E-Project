'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-phase-banner.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-phase-banner.cjs.dev.js");
}
