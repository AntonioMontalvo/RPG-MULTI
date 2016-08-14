// Initialize Firebase
var config = {
apiKey: "AIzaSyBrisdASLvt24maDABwnxzDuB0a-Et3c1s",
authDomain: "rpg-multiplayer-70b63.firebaseapp.com",
databaseURL: "https://rpg-multiplayer-70b63.firebaseio.com",
storageBucket: "rpg-multiplayer-70b63.appspot.com",
};
firebase.initializeApp(config);

var database = firebase.database();// Variable to reference the database.

var player1 = database.ref('/player1');
var player2 = database.ref('/player2');

var wins;
var losses;
var turn = 1;
var connection;


//---------------- (CONNECTIONS) --------------------------- //
// connectionsRef references a specific location in our database.
// All of our connections will be stored in this directory.
var connectionsRef = database.ref("/connections");

// '.info/connected' is a special location provided by Firebase that is updated every time the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {

	// If they are connected..
	if( snap.val() ) {

		// Add user to the connections list.
		var con = connectionsRef.push(true);

		// Remove user from the connection list when they disconnect.
		con.onDisconnect().remove();

	};

});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snap) {

	// Display the viewer count in the html.
	// The number of online users is the number of children in the connections list.
	$("#login").append().html('You are now Player: ' + snap.numChildren());

});


// Whenever a user clicks the click button
$("#start").on("click", function() {

	var name = $('#player-name').val().trim(); 
	console.log(name);

	database.ref('/Players').set({
				losses: 0, 
				name: name,
				wins: 0
			});

	
	// Don't refresh the page!
	return false;
});




// At the initial load, get a snapshot of the current data.
database.ref('/Players').on("value", function(snapshot) {
// Print the initial data to the console.
		console.log(snapshot.val());
	// If Firebase has a highPrice and highBidder stored (first case)
	if (snapshot.child("Players").exists()) {

		console.log('player1 exists');
	}
	

	});







console.log('hello');
var test = $('<div>');
test.attr('class', 'test2');
test.html('hello');
$('#box1').append(test);