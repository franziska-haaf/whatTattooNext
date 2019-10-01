const { COLORS, MOTIVES, MOTIVE_POSITIONS } = require('../data/tattoos');

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
  setTattooPosition();
  setCirclePosition();
}

function setTattooPosition() {
  let hiddenClass = 'hidden';
  let frontImg = $('#frontImg');
  let backImg = $('#backImg');

  if (randomBoolean()) {
    //show front
    if (!frontImg.hasClass(hiddenClass)) frontImg.addClass(hiddenClass);
    if (backImg.hasClass(hiddenClass)) backImg.removeClass(hiddenClass);
  } else {
    //show back
    if (!backImg.hasClass(hiddenClass)) backImg.addClass(hiddenClass);
    if (frontImg.hasClass(hiddenClass)) frontImg.removeClass(hiddenClass);
  }
}

function randomBoolean() {
  return Math.floor(Math.random() * 2);
}

function getMotivePosition() {
  return MOTIVE_POSITIONS[Math.floor(Math.random() * MOTIVE_POSITIONS.length)];
}

function setCirclePosition() {
  let position = getMotivePosition();
  let circle = $('#circle');
  circle.css('top', position.top);
  circle.css('left', position.left);
}
