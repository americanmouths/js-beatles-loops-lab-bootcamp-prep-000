function theBeatlesPlay (musicians, instruments) {
  var beat = [];
  for (var i = 0; i < musicians.length; i++) {
    beat.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return beat;
}

function johnLennonFacts(factsAboutLennon) {
  var facts = [];
  while (facts.length =< 4) {
    facts.push(factsAboutLennon[i] + '!!!')
  }
  return facts;
}
