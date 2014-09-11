'use strict';

var express = require('express');
var path = require('path');
var fs = require('fs');

var port = process.env.PORT || 9000;
var ip = process.env.IP || 'localhost';
var publicDir = 'client';
var app = express();

var env = process.env.NODE_ENV || 'development';
if ('production' === env) {
    publicDir = 'public';
    ip = process.env.OPENSHIFT_NODEDIY_IP || ip;
    port = process.env.OPENSHIFT_NODEDIY_PORT || port;
} else {
    app.use('/labs/rhLabsAngularApp/', express.static(path.resolve('.tmp')));
    app.use('/webassets', express.static('webassets'));
    app.use('/chrome_themes', express.static('chrome_themes'));
}

app.use('/labs/rhLabsAngularApp/', express.static(path.resolve(publicDir)));

app.get('/labs/rhLabsAngularApp/*', function(req, res) {
    res.sendfile(path.resolve(publicDir + '/index.html'));
}).listen(port, ip, function () {
  console.log('Express server listening on %d, in %s mode', port, app.get('env'));
});
