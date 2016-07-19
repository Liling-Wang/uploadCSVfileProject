/**
 * Created by liling on 7/16/16.
 */
var restify = require('restify');
var getopt = require('posix-getopt');
var loginServer = require('./server.js');

//function respond(req, res, next){
// res.send('hello ' + req.params.name);
//}

var server = restify.createServer();
//server.get('/hello/:name', respond);
//server.head('/hello/:name', respond);

server.get(/.*/, restify.serveStatic({
    directory:'./src',
    default: 'index.html',
    maxAge: 0
}));

var server = loginServer.createServer();

server.listen(8099, function() {
    console.log('%s listening at %s', server.name, server.url);
});
