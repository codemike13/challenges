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
  for (i = 0; i < this.length; i++) {
    if (this.toLowerCase().slice(i, str.length + i) === str.toLowerCase())
      return true;
  }
  return false;
};

console.log(wordz.includez(word));
