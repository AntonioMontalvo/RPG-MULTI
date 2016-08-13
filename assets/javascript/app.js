
 // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBrisdASLvt24maDABwnxzDuB0a-Et3c1s",
    authDomain: "rpg-multiplayer-70b63.firebaseapp.com",
    databaseURL: "https://rpg-multiplayer-70b63.firebaseio.com",
    storageBucket: "rpg-multiplayer-70b63.appspot.com",
  };
  firebase.initializeApp(config);



console.log('hello');
var test = $('<div>');
test.attr('class', 'test2');
test.html('hello');
$('#test').append(test);