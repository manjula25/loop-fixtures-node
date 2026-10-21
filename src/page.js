"use strict";

const { summarize } = require("./stats");

/** The dashboard page: one row showing how many items there are. */
function renderPage(values) {
  const summary = summarize(values);
  return `<!DOCTYPE html>
<html>
<head><title>Dashboard</title></head>
<body>
<h1>Dashboard</h1>
<table>
<tr><td>Total items</td><td>${summary.sum}</td></tr>
</table>
</body>
</html>`;
}

module.exports = { renderPage };
