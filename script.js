(function (window) {
/*
Hello Yaakov
Good Bye Jossim
Good Bye Jamil
Good Bye Jakob
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jo
*/

var names = ["Yaakov", "Jossim", "Jamil", "Jakob", "Paul", "Frank", "Larry", "Paula", "Laura", "Jo"];

for (var i in names) {
  var firstLetter = ((names[i]).charAt(0)).toLowerCase();
  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);