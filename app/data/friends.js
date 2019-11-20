// ===============================================================================
// DATA
var friends = [
	{
		name: 'Ahmed',
		photo:
			'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg',
		scores: [ '5', '1', '4', '4', '5', '1', '2', '5', '4', '1' ]
	},
	{
		name: 'Michael B Jordan',
		photo: 'https://s2.r29static.com/bin/entry/37d/340x408,85/2066824/image.webp',
		scores: [ '5', '5', '5', '5', '5', '5', '5', '5', '5', '5' ]
	},
	{
		name: 'Cara Delevingne',
		photo:
			'https://us.hola.com/imagenes/health-and-beauty/2019101529135/cara-delevingne-collagen-eye-masks-vv/0-211-618/cara-delevingne-fresh-eyes-a.jpg',
		scores: [ '5', '2', '2', '2', '4', '1', '3', '2', '5', '5' ]
	},
	{
		name: 'Wes Bentley',
		photo:
			'https://m.media-amazon.com/images/M/MV5BMTAxMjQxODk1NzZeQTJeQWpwZ15BbWU4MDI4NTA5NDcx._V1_SY1000_CR0,0,1498,1000_AL_.jpg',
		scores: [ '3', '3', '4', '2', '2', '1', '3', '2', '2', '3' ]
	},
	{
		name: 'Angela Basset',
		photo: 'https://static.vibe.com/files/2018/05/angela-bassett-yale-doctorate-1526940048-650x975.jpg',
		scores: [ '4', '3', '4', '1', '5', '2', '5', '3', '1', '4' ]
	},
	{
		name: 'Bowser',
		photo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/11/BowserNSMBUD.png/220px-BowserNSMBUD.png',
		scores: [ '4', '4', '2', '3', '2', '5', '3', '2', '4', '5' ]
	},
	{
		name: "Jeff Epstein's Murderer",
		photo:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/US_Capitol_west_side.JPG/250px-US_Capitol_west_side.JPG',
		scores: [ '1', '1', '1', '1', '1', '1', '1', '1', '1', '1' ]
	}
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friends;
