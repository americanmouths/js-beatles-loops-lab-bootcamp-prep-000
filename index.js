function theBeatlesPlay (musicians, instruments) {
  var beat = [];
  for (var i = 0; i < musicians.length; i++) {
    beat.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beat;
}

function johnLennonFacts(array) {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newFacts = [];
  var i = 0;
  while (facts.length > i) {
    newFacts.push(facts[i] + '!!!');
    i++;
  }
  return newFacts;
}
