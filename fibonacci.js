// make a TDD
// write a node app that takes one number as the only parameter,
// and it returns all the fibonacci sequence numbers
// that are smaller than that number
var fib = [];
function fibonacciSequence(number) {
  for(var i = 2; i <= 100; i++) {
    fib[0] = 0;
    fib[1] = 1;
    fib[i] = fib[i-2] + fib[i-1];

    if(number <= fib[i]) {
      return;
    };
    console.log(fib);
  };
}
fibonacciSequence(process.argv[2]);
