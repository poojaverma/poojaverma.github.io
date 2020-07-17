
(function () {

var names = ["Yaazi", "Jacob", "Jenny", "Jason", "Paul", "Frank", "Larry", "Pooja", "Mehak", "Jim"];

for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    byeSpeaker(names[i]);
  }
  else {
    helloSpeaker(names[i]);
  }
}

})();



