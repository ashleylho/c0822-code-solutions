/* exported titleCase */
// create storage for output

// if title contains ':' --> split title by ':'
// call apaStyle function with index 0 and index 1 as arguments
// concatenate the two results with ': ' in between
// return that result

// else if title does not contain ':', --> call apaStyle function with title as argument
// return that result

// apaStyle function:
// lowercase entire title
// split title into array of words
// create an array with all the minor words
// create variable for new array
// loop through array of words
// if word is found in minor words & word is at [0], capitalize the word
// if word === javascript, word = JavaScript
// if word === API, word = API
// if word includes '-', split word into array of words
// then capitalize the first letter of each word and push it into a new array
// join the array with '-' in between to create the new string
// word = new string
// add each word to array
// join all the words in the array into a string separated by spaces
// the result of that becomes the output

function titleCase(title) {
  if (title.includes(':')) {
    var array = title.split(': ');
    var part1 = apaStyle(array[0]);
    var part2 = apaStyle(array[1]);
    var newTitle = part1 + ': ' + part2;
    return newTitle;
  } else {
    return apaStyle(title);
  }
}

function apaStyle(title) {
  var lowercase = title.toLowerCase();
  var array = lowercase.split(' ');
  var minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var word;

    if (minor.includes(array[i]) && i === 0) {
      word = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    } else if (minor.includes(array[i])) {
      word = array[i];

    } else if (array[i] === 'javascript') {
      word = 'JavaScript';
    } else if (array[i] === 'api') {
      word = 'API';

    } else if (array[i].includes('-')) {
      var hyphenList = array[i].split('-');
      var array2 = [];
      var word1 = hyphenList[0].charAt(0).toUpperCase() + hyphenList[0].slice(1);
      var word2 = hyphenList[1].charAt(0).toUpperCase() + hyphenList[1].slice(1);
      array2.push(word1);
      array2.push(word2);
      word = array2.join('-');
    } else {
      word = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    }
    newArray.push(word);
  }
  var strings = newArray.join(' ');
  return strings;
}
