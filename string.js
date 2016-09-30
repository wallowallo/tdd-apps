// it recieves any string and prints out the string in reverse
// use charAt or "string".[x] to target the characters
// make a for loop to go from string end to string start

function recieveString(string) {
  var reverseString = "";
  for (var i = string.length - 1; i >= 0; i--) {
    reverseString = reverseString + string[i];
  }
  return reverseString;
}
console.log(recieveString(process.argv[2]));
console.log(functionalStringReverse(process.argv[2]));

function functionalStringReverse(string) {
  return string.split('').reverse().join('');
}
