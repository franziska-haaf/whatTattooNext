const TATTOO_MOTIVES = ['Eagle', 'Knife', 'Heart', 'Skull', 'Rainbow', 'Bird', 'Wolf', 'Dragon', 'Dolphin', 'Star', 'Zodiac', 'Biker',
                        'I Love Mom', 'Wind Rose', 'Arrow', 'An Astronaut being abducted by an alien', 'Sonic', 'Cracked Woman Head With A Forest', 
                        'Tiny Spider-Man Head', 'Black Octopus', 'Cthulhu', 'Dove' , 'Wonder Woman' , 'Tiger', 'Joker from Batman', 'Panther doing acid', 
                        'Floating Astronauts Skull', 'Roaring Gorilla Head', 'all seeing eye', 'Burning Church', 'Death Star', 'A little cow',
                        'An amazing horse so people would look at it','20 sided die','d20', 'Rainbow', 'Bongo Cat',];



/**
 * Return a possible tattoo motive.
 */
function getTattooMotive() {
  var index = Math.floor(Math.random()*TATTOO_MOTIVES.length);
  return TATTOO_MOTIVES[index];
}

/**
 * Return true or false. Random.
 * For motive2 and motive3. Not every tattoo needs 3 parts.
 * But every tattoo needs motive1.
 */
function randomBoolean() {
  return Math.random() < 0.5;
}
