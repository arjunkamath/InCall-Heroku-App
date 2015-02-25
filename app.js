
/**
 * Module dependencies.
 */

var express = require('express'),
    routes  = require('./routes'),
    redis = require('redis');

 
 var REDISTOGO_HOST = '';
 var REDISTOGO_PORT = '';
 var REDISTOGO_AUTH = '';
 
// This is to configure the app with the redistogo add-on
if (process.env.REDISTOGO_URL) {
    console.log('REDISTOGO_URL: ' + process.env.REDISTOGO_URL);

    var rtg = require('url').parse(process.env.REDISTOGO_URL);
    REDISTOGO_HOST = rtg.hostname;
    REDISTOGO_PORT = rtg.port;
    REDISTOGO_AUTH = rtg.auth.split(":")[1];

    console.log('Hostname: ' + REDISTOGO_HOST + 'Port: ' + REDISTOGO_PORT);

    var publisherClient = redis.createClient(REDISTOGO_PORT, REDISTOGO_HOST);
    publisherClient.auth(REDISTOGO_AUTH);
} else {
    console.log('NO REDISTOGO_URL');
    var publisherClient = redis.createClient();
    REDISTOGO_HOST = "127.0.0.1";
    REDISTOGO_PORT = 6379;
}

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', function(req, res){
  res.render('index');
  //res.sendfile('index.html'); 
});

app.get('/update-stream', function(req, res) {
  // let request last as long as possible
  req.socket.setTimeout(99999);

  var messageCount = 0;
  var subscriber = redis.createClient(REDISTOGO_PORT, REDISTOGO_HOST);
  subscriber.auth(REDISTOGO_AUTH);

  subscriber.subscribe("updates");

  // In case we encounter an error...print it out to the console
  subscriber.on("error", function(err) {
    console.log("Redis Error: " + err);
  });

  // When we receive a message from the redis connection
  subscriber.on("message", function(channel, message) {
    messageCount++; // Increment our message count

    res.write('id: ' + messageCount + '\n');
    res.write("data: " + message + '\n\n'); // Note the extra newline
  });

  //send headers for event-stream connection
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  res.write('\n');

  // The 'close' event is fired when a user closes their browser window.
  // In that situation we want to make sure our redis channel subscription
  // is properly shut down to prevent memory leaks...and incorrect subscriber
  // counts to the channel.
  req.on("close", function() {
    subscriber.unsubscribe();
    subscriber.quit();
  });
});

app.get('/fire-event/:event_name', function(req, res) {
  console.log('Event is: ' + req.params.event_name);
  publisherClient.publish( 'updates', ('"' + req.params.event_name + '"') );
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('SECOND TEST: All clients have received "' + req.params.event_name + '"');
  res.end();
});

app.listen(process.env.PORT || 5000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
