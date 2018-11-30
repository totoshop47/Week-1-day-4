var words = ["ground", "control", "to", "major", "tom"];

function map(items, transform) {
  var output = [];
  items.forEach(function(item){
    var transformedItem = transform(item);
    output.push(transformedItem);
  });
  return output;
}


console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));

// console.log(length);
// console.log(upperCase);
// console.log(split);




// function(word) {
//   return word.length;
// }


// console.log(map(words));









// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]