"use strict";

// HTTP server for the fixture. `npm start` listens on PORT (default 8766).
//   GET /              -> the dashboard page for VALUES   (UI surface)
//   GET /api/summarize -> summarize(VALUES)               (API surface)
//   GET /api/average   -> { average: average(VALUES) }    (API surface)
const http = require("node:http");
const { summarize, average } = require("./src/stats");
const { renderPage } = require("./src/page");

const VALUES = [1, 2, 3, 4];

function send(res, status, type, body) {
  res.writeHead(status, { "Content-Type": type, "Content-Length": Buffer.byteLength(body) });
  res.end(body);
}

const server = http.createServer((req, res) => {
  if (req.url === "/") return send(res, 200, "text/html", renderPage(VALUES));
  if (req.url === "/api/summarize") return send(res, 200, "application/json", JSON.stringify(summarize(VALUES)));
  if (req.url === "/api/average") return send(res, 200, "application/json", JSON.stringify({ average: average(VALUES) }));
  send(res, 404, "text/plain", "not found");
});

const port = Number(process.env.PORT ?? 8766);
server.listen(port, "0.0.0.0", () => console.log(`serving on http://0.0.0.0:${port}`));
