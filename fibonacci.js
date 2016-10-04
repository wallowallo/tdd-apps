// make a TDD
// write a node app that takes one number as the only parameter,
// and it returns all the fibonacci sequence numbers
// that are smaller than that number

function fibonacciSequence(number) {

  var fib = [];

  fib[0] = 0;
  fib[1] = 1;

  for(var i = 2; i <= 21; i++) {
    fib[i] = fib[i-2] + fib[i-1];

    if(number === 1) {
      return console.log(fib[0]);
    };

    if(number <= fib[i]) {
      return;
    };
    console.log(fib);
  };
}
fibonacciSequence(process.argv[2]);
