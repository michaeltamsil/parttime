var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({noServer: true});
var express = require('express')
var path = require('path')
var compression = require('compression');
var app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(compression());
// send all requests to index.html so browserHistory in React Router works
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
})
var PORT = process.env.PORT || 99
app.listen(PORT, function() {
console.log('Production Express server running at localhost:' + PORT)
})
app.on('upgrade', wss.handleUpgrade);
wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
