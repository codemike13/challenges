/*
    Write your own version of includes() method on String that ignores letter case, and without using existing includes() method.

    solution("Hello, world", "Hello") == true
    solution("Hello, world", "WORLD") == true
    solution("Hello, world", "Goodbye") == false
*/

//loop

let wordz = "Hello world";
const word = "world";

//cheat( use similar to includes() method)

//elegant
String.prototype.includez = function(str) {
  let this_words = [...this.toLowerCase().split(" ")];
  let str_words = [...str.toLowerCase().split(" ")];
  for (i = 0; i < this_words.length; i++) {
    if (this_words[i] === str_words[i]) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};

console.log(wordz.includez(word));
