// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 122231111") === "1"

// map
function maxChar(string) {
  var map = new Map();
  var character = "";
  var used = 1;
  var max = 0;

  for (char of string) {
    if (map.has(char)) {
        used += 1;
        map.set(char, used)
    } else {
        map.set(char, used)
    }

    if (max < used) {
        max = used;
        character = char;
    }
  }
  return character
}

// for
// function maxChar(string) {
//   let stringMap = {};
//   let acc = 0;
//   let character = "";

//   for (char of string) {
//     stringMap[char] = stringMap[char] + 1 || 1;

//     if (stringMap[char] > acc) {
//       acc = stringMap[char];
//       character = char;
//     }
//   }

//   return character;
// }

module.exports = maxChar;
