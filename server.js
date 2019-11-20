// var express = require('express');
// var app = express();
// var path = require('path');

// var PORT = process.env.PORT || 8080;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // require('./app/routes/apiRoutes')(app);
// // require('./app/routes/htmlRoutes')(app);

// require(path.join(__dirname, './app/routes/apiRoutes'))(app);
// require(path.join(__dirname, './app/routes/htmlRoutes'))(app);

// app.listen(PORT, function() {
// 	console.log('App listening on PORT: ' + PORT);
// });

// Pull in required dependencies
// var express = require('express');
// var bodyParser = require('body-parser');
// var path = require('path');

// // Configure the Express application
// var app = express();
// var PORT = process.env.PORT || 8080;

// // Expose the public directory to access CSS files
// app.use(express.static(path.join(__dirname, './app/public')));

// // Add middleware for parsing incoming request bodies
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());

// // Add the application routes
// require(path.join(__dirname, './app/routes/apiRoutes'))(app);
// require(path.join(__dirname, './app/routes/htmlRoutes'))(app);

// // Start listening on PORT
// app.listen(PORT, function() {
// 	console.log('Friend Finder app is listening on PORT: ' + PORT);
// });

//Dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// routes
require('./app/routes/apiRoutes.js')(app);
require('./app/routes/htmlRoutes.js')(app);

// Starts the server to begin listening
app.listen(PORT, function() {
	console.log('App listening on PORT: ' + PORT);
});
