function theBeatlesPlay (musicians, instruments) {
  var beat = [];
  for (var i = 0; i < musicians.length; i++) {
    beat.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beat;
}

function johnLennonFacts() {
  var newFacts = [];
  var i = 0;
  while (facts.length > i) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts;
}
