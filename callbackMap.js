var words = ["ground", "control", "to", "major", "tom"];

//defination of custom map function.
function customMap(words, func) {
  var lengthArray = [];
  for(var index = 0; index < words.length; index++) {
    var lengthOfString = func(words[index]);
    lengthArray.push(lengthOfString);
   }
   return lengthArray;
}

//callback function
function lengthCallback(subString) {
  return subString.length;
}
//calling custom Map function.
console.log(customMap(words,lengthCallback));