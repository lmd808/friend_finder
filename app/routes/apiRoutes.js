// load the data
var friendData = require('../data/friends');

// routing
module.exports = function(app) {
	// api get request
	app.get('/api/survey', function(req, res) {
		// grabs the Data and prints it in a JSON format
		res.json(friendData);
	});

	// api post request
	app.post('/api/survey', function(req, res) {
		//use later in for loop
		var totalDifference = 0;
		//Object to hold best match
		var bestMatch = {
			name: '',
			photo: '',
			// friend difference will take on a different value later
			// currently set to arbitrary number
			matchDif: 9999
		};
		//grab data from the user POST
		var userData = req.body;
		// look at the data (what I'm working with)
		console.log(userData);
		// grab the name from the user data object
		var userName = userData.name;
		// grab the scores array from the user data object
		var userScores = userData.scores;
		//before this user scores was a STRING making it impossible to add. By preforming the function below we loop through the array using map() and convert the items in the array from strings to integers
		var b = userScores.map(Number);
		// logs and array of numbers
		console.log(b);
		//reset the value of scores in the userdata object to my new array of numbers
		userData = {
			name: req.body.name,
			photo: req.body.photo,
			scores: b
		};
		// logs the data
		console.log(userData);
		// logs user name
		console.log('Name: ' + userName);
		// logs the new score
		console.log('User Score ' + userScores);
		// Converting the users score to a sum number (Adds up all the numbers in array)
		// sum will be the variable we use later to compare diffrences to
		var sum = b.reduce((a, b) => a + b, 0);
		console.log('Sum of users score ' + sum);
		// Loop through the friendData
		// here will will sort out who is our best friend match
		// for loop to sort through friend data
		for (var i = 0; i < friendData.length; i++) {
			// here is out total difference variable set to 0
			totalDifference = 0;
			// log user name
			console.log(friendData[i].name);
			var bye = friendData[i].scores;
			// convert array of strings to integers
			fScore = bye.map(Number);
			// log the score
			console.log(fScore);
			// add up the array of integers in the array fScore
			var bfScore = fScore.reduce((a, b) => a + b);
			// log the total score
			console.log('Total friend score ' + bfScore);
			// ensure that that number is absolute using the Math object with it's abs() (absolute) method
			// set that equal to totalDifference
			totalDifference += Math.abs(sum - bfScore);
			// log totalDifference
			console.log(' -------------------> ' + totalDifference);

			// If the sum of differences is less then the differences of the current "best match"
			// We are looking for the smallest difference (most similar) people's interests
			// conditional- if totalDifference is less than or equal to my preset value (9999) of bestMatch.matchDif do the following
			if (totalDifference <= bestMatch.matchDif) {
				// set best match = friendData
				// set name
				bestMatch.name = friendData[i].name;
				// set photo
				bestMatch.photo = friendData[i].photo;
				// set total difference
				bestMatch.matchDif = totalDifference;
				// conditional to protect the user from themselves
				// if the user resubmits the quiz they won't get themselves
				// but they will get MR. T
				// if bestMatch.name === userName
				if (bestMatch.name == userName) {
					// set name to Mr. T
					bestMatch.name = 'Mr T.';
					// set photo to mr. T
					bestMatch.photo =
						'https://cdn-01.independent.ie/regionals/enniscorthyguardian/opinion/article38483327.ece/35529/AUTOCROP/w620/2019-09-10_wex_53210077_I1.JPG';
					//set difference
					bestMatch.matchDif = 10;
				}
			}
			// log total difference
			console.log(totalDifference + ' Total Difference');
		}
		//log best match
		console.log(bestMatch);
		// push user data to friends.js file
		friendData.push(userData);
		// log user added sucessfully
		console.log('New User added successfully');
		// send json response to survey.html
		res.json(bestMatch);
	});
};

//change questions
// deploy to heroku
