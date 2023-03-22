'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./govuk-react-breadcrumbs.cjs.prod.js");
} else {
  module.exports = require("./govuk-react-breadcrumbs.cjs.dev.js");
}
