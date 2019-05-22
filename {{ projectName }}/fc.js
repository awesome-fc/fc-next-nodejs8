
const { app, server } = require('./server');
const { Server } = require('@webserverless/fc-express');
const getRawBody = require('raw-body');
const proxyServer = new Server(server);

// http trigger
exports.handler = async (req, res, context) => {
    req.body = await getRawBody(req);
    await app.prepare();
    proxyServer.httpProxy(req, res, context);
};

// api gateway
// exports.handler = async (event, context, callback) => {
//     await app.prepare();
//     proxyServer.proxy(event, context, callback);
// };