// make app that prints any prime number under 20
var numbers = process.argv[2];
for (var i = 1; i <= numbers; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
// make an if statement that checks if the number is a prime number with modulus (%)
function isPrime(number) {
  for (var i = 2; i < number; i++) {
    // use if statement to check if the number modulus i is = 0
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
