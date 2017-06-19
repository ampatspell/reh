/* eslint-env node */
var proxyPath = '/api';

module.exports = function(app) {
  var proxy = require('http-proxy').createProxyServer({});

  proxy.on('error', function(err, req) {
    console.error(err, req.url);
  });

  app.use(proxyPath, function(req, res, next) {
    req.url = proxyPath + '/' + req.url;
    proxy.web(req, res, { target: 'http://127.0.0.1:5984' });
  });
};
