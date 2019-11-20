// require path
var path = require('path');

// routing
module.exports = function(app) {
	// GET request
	// sends survey.htmp when '/survey' is requested
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

	// default route to send people back to our home page
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
};
