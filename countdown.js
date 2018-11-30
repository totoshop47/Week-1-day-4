var countdownGenerator = function (x) {
  /* your code here */
  var startNum = x+1;

  return function(){
    startNum --;
    if(startNum === 0) {
      console.log('Blast Off!');
    } else if(startNum < 0) {
      console.log('Rockets already gone, bub!');
    } else {
      console.log(`T-minus ${startNum}...`);
    }
  }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!