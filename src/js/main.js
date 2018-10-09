const COLORS = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Indigo',
  'Violet',
  'Black'
];

const MOTIVES = ['Eagle', 'Knife', 'Heart', 'Skull', 'Rainbow', 'Bird', 'Wolf', 'Dragon', 'Dolphin', 'Star', 'Zodiac', 'Biker',
                        'I Love Mom', 'Wind Rose', 'Arrow', 'An Astronaut being abducted by an alien', 'Sonic', 'Cracked Woman Head With A Forest',
                        'Tiny Spider-Man Head', 'Black Octopus', 'Cthulhu', 'Dove' , 'Wonder Woman' , 'Tiger', 'Joker from Batman', 'Panther doing acid',
                        'Floating Astronauts Skull', 'Roaring Gorilla Head', 'all seeing eye', 'Burning Church', 'Death Star', 'A little cow',
                        'An amazing horse so people would look at it','20 sided die','d20', 'Rainbow', 'Bongo Cat', 'Constellation', 'Planet', 'Galaxy',
                        'Compass', 'Butterfly', 'Cross', 'Hexagram', 'Tribal', 'Book', 'Flower', 'Dandelion', 'Wings', 'Snake', 'Fox', 'Joker', 'Salvador Dalí: The Elephants',
                        'Hourglass', 'Ship', 'Mountains', 'Abstract Punctuation', 'Mandala', 'Unicorn','Football banter','Sword','Superhero', 'Renew your mind', 'Be Nice!', 'Infinity'];


/**
 * Master function to generate all motives required to provide
 * a tattoo result.
 * @param {Array} motives array of motives to choose from.
 */
function getMotives(motives) {
  let _motives = motives.slice();
  let _selected = [];
  const maxNoOfMotives = 3;
  // Always select at least 1 motive.
  _selected.push(getMotive(_motives));

  // Selection of subsequent motives is random. Use maxNoOfMotives to
  // determine max length of returned motives.
  for (let i = 0; i < maxNoOfMotives - 1; i++) {
    if (Math.round(Math.random()) === 1) {
      // Removes the last selected motive from the array.
      _motives = removeArrayValue(_motives, _selected[_selected.length - 1]);
      _selected.push(getMotive(_motives));
    }
  }

  while (_selected.length < maxNoOfMotives) {
    _selected.push('---');
  }

  return _selected;
}

/**
 * Returns a possible tattoo motive.
 * Motives are passed in rather than using global array to avoid
 * motive double ups.
 *
 * @param {Array} motives Array of motives to choose from.
 */
function getMotive(motives) {
  const motive = motives[Math.floor(Math.random() * motives.length)];
  return motive;
}

/**
 * Returns a possible tattoo color.
 *
 * @param {Array} colors Array of colors to choose from.
 */
function getColor(colors) {
  let _colors = colors.slice();
  return _colors[Math.floor(Math.random() * _colors.length)];
}

/**
 * Removes a value from an array and returns a new array.
 *
 * @param {Array} array  Array of values to be searched.
 * @param {String} value Value to be removed from Array.
 */
function removeArrayValue(array, value) {
  const valueIndex = array.indexOf(value);

  // If value found in array:
  if (valueIndex > -1) {
    array.splice(valueIndex);
  }

  return array;
}

/**
 * Assigns the genrated color and motives to the relevant text fields.
 *
 * @param {String} color Tattoo color.
 * @param {Array} motives Array of motive Strings.
 */
function assignValues(color, motives) {
  $('#color').text(color);
  for (const [index, value] of motives.entries()) {
    $(`#motive${index + 1}`).text(value);
  }
}

/**
 * Generates a random tattoo design with a relevant color, and 2 motives.
 */
function generateTattoo() {
  const color = getColor(COLORS);
  const motives = getMotives(MOTIVES);
  assignValues(color, motives);
}

