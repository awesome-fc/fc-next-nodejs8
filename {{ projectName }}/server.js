const express = require("express");
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();

const createServer = () => {
  const server = express();
  server.get("*", (req, res) => handle(req, res));
  return server;
};

const server = createServer();

exports.app = app;
exports.server = server;
